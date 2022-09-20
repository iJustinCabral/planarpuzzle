export function redrawCanvas(model, canvasObj, appObj) {
    const context = canvasObj.getContext("2d")

    //clears the context
    context.clearRect(0, 0, canvasObj.width, canvasObj.height)
}