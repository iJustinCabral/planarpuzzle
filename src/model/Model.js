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


export class Coordinate {
    constructor(row, column) {
        this.row = row
        this.column = column
    }
}

export class Square {
    constructor() {

    }
}

export class PlanarPuzzle {
    constructor() {

    }

}

export default class Model {
    constructor() {
        
    }
}
