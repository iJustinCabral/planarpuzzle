import { computeRectangle } from "../boundary/Boundary";


export function selectConfig(model, canvas, event) {

}

export function selectSquare(model, canvas, event) {
    const canvasRect = canvas.getBoundingClientRect()

    let idx = model.puzzle.squares.findIndex(square => {
        let rect = computeRectangle(square);
        return rect.contains(event.clientX - canvasRect.left, event.clientY - canvasRect.top);
    });

    let selected = null;
    if (idx >= 0) {
      selected = model.puzzle.squares[idx];
    } 

    console.log(selected)

    // select this piece! Construct new model to represent this situation.
    model.puzzle.select(selected);
    return model.copy();
}

export function extendColor(model, direction) {

}

export function resetPuzzle(model, canvas) {
    
}