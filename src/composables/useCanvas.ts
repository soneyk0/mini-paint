import { ref, onMounted, onBeforeUnmount } from 'vue'
import store from '../store.ts'

export const useCanvas = (canvasRef: any) => {
  const context = ref<CanvasRenderingContext2D | null>(null)
  let isDrawing = false
  let startX = 0
  let startY = 0
  let currentX = 0
  let currentY = 0
  let canvasBuffer: ImageData | null = null

  const updateCanvasSize = () => {
    const canvasElement = canvasRef.value!
    const editorField = document.querySelector('.editor__field') as HTMLElement

    const fieldWidth = editorField.offsetWidth
    const fieldHeight = editorField.offsetHeight

    canvasElement.width = fieldWidth
    canvasElement.height = fieldHeight

    if (context.value) {
      context.value.lineWidth = store.state.lineWidth
      context.value.strokeStyle = store.state.color
    }
  }

  const startDrawing = (event: MouseEvent) => {
    const canvasElement = canvasRef.value!
    const rect = canvasElement.getBoundingClientRect()

    startX = event.clientX - rect.left
    startY = event.clientY - rect.top

    isDrawing = true

    if (context.value) {
      context.value.lineWidth = store.state.lineWidth
      context.value.strokeStyle = store.state.color
      if (store.state.tool === 'brush') {
        context.value.beginPath()
        context.value.moveTo(startX, startY)
      } else {
        canvasBuffer = context.value.getImageData(
          0,
          0,
          canvasElement.width,
          canvasElement.height,
        )
      }
    }
  }

  const draw = (event: MouseEvent) => {
    if (!isDrawing || !context.value) return

    const canvasElement = canvasRef.value!
    const rect = canvasElement.getBoundingClientRect()

    currentX = event.clientX - rect.left
    currentY = event.clientY - rect.top

    if (store.state.tool === 'brush') {
      context.value.lineTo(currentX, currentY)
      context.value.stroke()
    } else {
      if (canvasBuffer) {
        context.value.putImageData(canvasBuffer, 0, 0)
      }

      const radius = Math.sqrt(
        (currentX - startX) ** 2 + (currentY - startY) ** 2,
      )

      switch (store.state.tool) {
        case 'line':
          context.value.beginPath()
          context.value.moveTo(startX, startY)
          context.value.lineTo(currentX, currentY)
          context.value.stroke()
          break
        case 'circle':
          context.value.beginPath()
          context.value.arc(startX, startY, radius, 0, Math.PI * 2)
          context.value.stroke()
          break
        case 'square':
          context.value.beginPath()
          context.value.moveTo(startX, startY)
          context.value.lineTo(currentX, startY)
          context.value.lineTo(currentX, currentY)
          context.value.lineTo(startX, currentY)
          context.value.closePath()
          context.value.stroke()
          break
        case 'polygon':
          const sides = 6
          const angleStep = (2 * Math.PI) / sides
          context.value.beginPath()

          for (let i = 0; i <= sides; i++) {
            const angle = i * angleStep
            const x = startX + radius * Math.cos(angle)
            const y = startY + radius * Math.sin(angle)

            if (i === 0) {
              context.value.moveTo(x, y)
            } else {
              context.value.lineTo(x, y)
            }
          }
          context.value.closePath()
          context.value.stroke()
          break
        case 'star':
          const points = 5
          const outerRadius = radius
          const innerRadius = radius / 2

          context.value.beginPath()
          for (let i = 0; i < points * 2; i++) {
            const currentRadius = i % 2 === 0 ? outerRadius : innerRadius
            const angle = (Math.PI / points) * i

            const x = startX + currentRadius * Math.cos(angle)
            const y = startY + currentRadius * Math.sin(angle)

            if (i === 0) {
              context.value.moveTo(x, y)
            } else {
              context.value.lineTo(x, y)
            }
          }
          context.value.closePath()
          context.value.stroke()
          break
      }
    }
  }

  const stopDrawing = () => {
    isDrawing = false
    if (store.state.tool !== 'brush' && canvasBuffer && context.value) {
      canvasBuffer = context.value.getImageData(
        0,
        0,
        canvasRef.value!.width,
        canvasRef.value!.height,
      )
    }
  }

  onMounted(() => {
    const canvasElement = canvasRef.value!
    context.value = canvasElement.getContext('2d')

    canvasElement.addEventListener('mousedown', startDrawing)
    canvasElement.addEventListener('mousemove', draw)
    canvasElement.addEventListener('mouseup', stopDrawing)

    window.addEventListener('resize', updateCanvasSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateCanvasSize)
  })

  return {
    updateCanvasSize,
    startDrawing,
    draw,
    stopDrawing,
  }
}
