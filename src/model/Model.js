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

export const Down = ExtendType(1, 0, "down")
export const Up = ExtendType(-1, 0, "up")
export const Left = ExtendType(0, -1, "left")
export const Right = ExtendType(0, 1, "right")
export const NoMove = ExtendType(0, 0, "*")



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
}

export class PlanarPuzzle {
    constructor(name, numRows, numColumns, selected, destination) {
        this.name = name
        this.numRows = numRows
        this.numColumns = numColumns
        this.selected = selected
        this.destination = destination

    }

    initialize(baseSquares, unusedSquares, emptySquares) {

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
        let numRows = pasrseInt(info.board.rows)
        let numColumns = parseInt(info.board.columns)
        

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
