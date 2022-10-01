import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils"

export class ExtendType {
    constructor(deltaRow, deltaColumn) {
        this.deltaRow = deltaRow
        this.deltaColumn = deltaColumn
    }

    static parse(s) {
        if ((s === "down" || s === "Down")) { return Down }
        if ((s === "up" || s === "Up")) { return Up }
        if ((s === "left" || s === "Left")) { return Left }
        if ((s === "right" || s === "Right")) { return Right }

        return NoMove
    }
}

export const Down = new ExtendType(1, 0, "down")
export const Up = new ExtendType(-1, 0, "up")
export const Left = new ExtendType(0, -1, "left")
export const Right = new ExtendType(0, 1, "right")
export const NoMove = new ExtendType(0, 0, "*")



export class Coordinate {
    constructor(row, column) {
        this.row = row
        this.column = column
    }
}

export class Square {
    constructor(row, column, color, count) {
        this.row = row
        this.column = column
        this.color = color
        this.count = count
    }

    extend(direction) {
        this.row += direction.deltaRow
        this.column += direction.deltaColumn
    }

    place(row, col) {
        this.row = row;
        this.column = col;
    }

    location() {
        return new Coordinate(this.row, this.column)
    }

    // Needed for solving without using the GUI
    copy() {
        let s = new Square(this.row, this.column, this.color, this.count);
        s.place(this.row, this.column);
        return s;
    }
    
}

export class PlanarPuzzle {
    constructor(name, numRows, numColumns, baseSquares, unusedSquares, emptySquares) {
        this.name = name
        this.numRows = numRows
        this.numColumns = numColumns
        this.selected = null
        this.baseSquares = baseSquares
        this.unusedSquares = unusedSquares
        this.emptySquares = emptySquares
        
    }

    initialize(squares) {
        this.squares = squares.map(s => s.copy())
    }

    *blocks() {
        for(let i = 0; i < this.squares.length; i++) {
            yield this.squares[i]
        }
    }

    select(square) {
        if (square.color === "black") { return } 
        if (this.selected === square) { this.selected = null; return}      

        this.selected = square;
    }

    isSelected(square) {
        return square === this.selected
    }

    extend(direction) {

        let row = parseInt(this.selected.row) + direction.deltaRow
        row = "" + row

        let column = parseInt(this.selected.column) + direction.deltaColumn
        column = "" + column

        let coordinate = new Coordinate(row, column)
        this.squares.findIndex(square => {
            if (coordinate.row === square.row && coordinate.column === square.column) {
                square.color = this.selected.color
                square.count += this.selected.count + 1
                this.selected = null
            }
        })
    }

    isSolved() {
        return true
    }

    isEmptySquare(coordinate) {
        
        let loc = coordinate
        let output = false

        this.squares.forEach(square => {
            if (square.row == coordinate.row && square.column == coordinate.column) {
                if (square.color == "white") {
                    output = true
                }
            }
        })

        return output
    }

    validExtensions() {
        let square = this.selected
        if (square === null) { return [] }
        if (square.color === "white" || square.color === "black") { return [] }

        let extensions = []
        let coordinate = this.selected.location()

        // Check if move to Left is valid
        let valid = false
        if (coordinate.column > 0) {
            valid = this.isEmptySquare(new Coordinate(coordinate.row, coordinate.column - 1))
        }
        if (valid) { extensions.push(Left) }

        // Check if move to Right is valid
        valid = false
        if (coordinate.column < this.numColumns) {
            let rightC = parseInt(coordinate.column) + 1
            valid = this.isEmptySquare(new Coordinate(coordinate.row, rightC))
        }
        if (valid) { extensions.push(Right) }

        // Check if move to Up is valid
        valid = false
        if (coordinate.row > 0 ) {
            let topR = parseInt(coordinate.row) - 1
            valid = this.isEmptySquare(new Coordinate(topR, coordinate.column))

        }
        if (valid) { extensions.push(Up) }

        // Check if move to Up is valid
        valid = false
        if (coordinate.row < this.numRows) {
            let bottomR = parseInt(coordinate.row) + 1
            valid = this.isEmptySquare(new Coordinate(bottomR, coordinate.column))
        }
        if (valid) { extensions.push(Down) }


        return extensions

    }

    checkPathCount(color) {

    }

    clone() {
        let copy = new PlanarPuzzle(this.name, this.numRows, this.numColumns, this.selected, this.baseSquares, this.unusedSquares, this.emptySquares);
        copy.squares = [];
        for (let s of this.squares) {
            let duplicate = s.copy();
            copy.squares.push(duplicate);
            if (s === this.selected) {
                copy.selected = duplicate;
            }
        }
        
        return copy;
    }

}

export default class Model {
    constructor(info) {
        this.initialize(info)
        this.info = info
    }

    initialize(info) {
        let numRows = parseInt(info.rows)
        let numColumns = parseInt(info.columns)
        var victory = false
        let showLabels = false

        let emptySquares = [].concat(info.emptySquares)
        var numEmptySquares = emptySquares.length

        console.log(this.numEmptySquares)
        var squares = [].concat(info.emptySquares, info.baseSquares, info.unusedSquares)
        var allSquares = []

        for (let s of squares) {
            var newSqaure = new Square(parseInt(s.row), parseInt(s.column), s.color, 0)
            newSqaure.place(s.row, s.column)
            allSquares.push(newSqaure)
        }

        this.puzzle = new PlanarPuzzle(info.name, numRows, numColumns, info.baseSquares, info.unusedSquares, info.emptySquares)
        this.puzzle.initialize(allSquares)

    }

    updateEmptySquareCount(delta) {
        this.numEmptySquares -= delta
        console.log("Empty Squares: " + this.numEmptySquares)
    }


    emptySquares() {
        return this.numEmptySquares
    }

    isValid(direction) {
        if (!this.puzzle.selected) { return false } 
        if (direction === NoMove) { return false }

        let allExtensions = this.puzzle.validExtensions()
        return allExtensions.includes(direction)
    }

    isVictorious() {

    }

    didResetPuzzle() {

    }

    setConfiguration() {
        
    }

    copy() {
        let m = new Model(this.info);    
        m.numRows = this.numRows
        m.numColumns = this.numColumns             
        m.puzzle = this.puzzle.clone();
        m.numEmptySquares = this.numEmptySquares;
        m.showLabels = this.showLabels;
        m.victory = this.victory;
        return m;
    }
}
