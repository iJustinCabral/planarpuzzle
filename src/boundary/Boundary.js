var BOXSIZE = 50;
const OFFSET = 1;

export class Rectangle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    contains(x, y) {
      return x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height);
    }

}

function drawPuzzle(context, puzzle, showLabels) {

    context.shadowColor = "black"
    let selected = puzzle.selected

    puzzle.squares.forEach(square => {
        let rect = computeRectangle(square)

        if (square === selected) {
            context.fillStyle = "lightgrey"
        } else {
            if (square.color === "white") {
                context.fillStyle = "white"
            }
            else if (square.color === "red") {
                context.fillStyle = "red"
            }
            else if (square.color === "orange") {
                context.fillStyle = "orange"
            }
            else if (square.color === "yellow") {
                context.fillStyle = "yellow"
            }
            else if (square.color === "blue") {
                context.fillStyle = "blue"
            }
            else if (square.color === "black") {
                context.fillStyle = "black"
            }
        }
         
        context.shadowBlur = 5
        context.fillRect(rect.x, rect.y, rect.width, rect.height)

    })

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
        drawPuzzle(context, model.puzzle, model.showLabels)
    }

}
