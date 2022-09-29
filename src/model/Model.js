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
    }

    extendColor(direction) {

    }

    contains(coordinate) {

    }

    place(row, col) {
        this.row = row;
        this.column = col;
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
        this.squares = [].concat(emptySquares, baseSquares, unusedSquares)
       
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
        this.puzzle = new PlanarPuzzle(info.name, numRows, numColumns, info.baseSquares, info.unusedSquares, info.emptySquares)

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
