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
    constructor(row, column, count, color) {
        this.row = row
        this.column = column
        this.count = count
        this.color = color
        this.label = "" 
    }

    extendColor(direction) {

    }

    contains(coordinate) {

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
        let s = new Square(this.width, this.height, this.color, this.count);
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
            yield this.pieces[i]
        }
    }

    isSolved() {
        return true
    }

    isValid(coordinate) {
        return true
    }

    validExtensions() {

    }

    checkPathCount(color) {

    }

}

export default class Model {
    constructor(info) {
        this.initialize(info)
    }

    initialize(info) {
        let numRows = parseInt(info.rows)
        let numColumns = parseInt(info.columns)
        var numEmptySquares = parseInt(info.emptySquares.length)
        var victory = false
        let showLabels = false

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

    updateEmptySquareCount() {

    }

    isVictorious() {

    }

    didResetPuzzle() {

    }

    setConfiguration() {
        
    }
}
