export const clearCanvas = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
) => {
  context.clearRect(0, 0, canvas.width, canvas.height)
}
