import { computeRectangle } from "../boundary/Boundary";
import Model from "../model/Model";


export function selectConfig(model, level) {
    let config = model.configurations[level]
    return new Model(config)
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
    
    model.puzzle.select(selected);
    return model.copy();
}

export function extendColor(model, direction) {
    let selected = model.puzzle.selected
    if (!selected) { return model }

    model.puzzle.extend(direction)
    model.isVictorious()
    return model.copy()

}

export function resetPuzzle(model) {
    let puzzle = model.currentConfigutation()
    return new Model(puzzle)
}