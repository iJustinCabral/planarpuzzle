var BOXSIZE = 80;
const OFFSET = 1;

export class Rectangle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    /** Does the (x,y) point exist within the rectangle. */
    contains(x, y) {
      return x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height);
  }
}

function drawPuzzle(context, puzzle) {

    context.shadowColor = "black"
    let selected = puzzle.selected

}

export function computeRectangle(square) {
    return new Rectangle(BOXSIZE*square.column + OFFSET, BOXSIZE*square.row + OFFSET, 
                         BOXSIZE*1 - 2*OFFSET, BOXSIZE*1 - 2*OFFSET);
  }

export function redrawCanvas(model, canvasObj, appObj) {
    // Used for testing work around
    // if (typeof canvasOjb === "undefined") { return }

    const context = canvasObj.getContext("2d")
    // if (context === null) { return }

    context.clearRect(0, 0, canvasObj.width, canvasObj.height)

    if (model.puzzle) {
        drawPuzzle(context, model.puzzle)
    }

}
