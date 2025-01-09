<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import router from '../appRoutes/router.ts'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../main.ts'
import { getAuth } from 'firebase/auth'
import Input from '../common/BaseInput.vue'
import { toast } from 'vue3-toastify'
import Onboarding from './Onboarding.vue'
import { stepsEditorOnboarding } from '../stepsStore/stepsStore.ts'

const canvas = ref<HTMLCanvasElement | null>(null)
const context = ref<CanvasRenderingContext2D | null>(null)
const color = ref('#000000')
const lineWidth = ref(2)
const tool = ref('brush')
let isDrawing = false

let startX = 0
let startY = 0
let currentX = 0
let currentY = 0
const auth = getAuth()
const user = auth.currentUser

onMounted(() => {
  updateCanvasSize()

  const canvasElement = canvas.value!
  context.value = canvasElement.getContext('2d')

  canvasElement.addEventListener('mousedown', startDrawing)
  canvasElement.addEventListener('mousemove', draw)
  canvasElement.addEventListener('mouseup', stopDrawing)

  window.addEventListener('resize', updateCanvasSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCanvasSize)
})

let canvasBuffer: ImageData | null = null

function setTool(selectedTool: string) {
  tool.value = selectedTool
}

function clearCanvas() {
  if (context.value) {
    context.value.clearRect(0, 0, canvas.value!.width, canvas.value!.height)
  }
}

function startDrawing(event: MouseEvent) {
  const canvasElement = canvas.value!
  const rect = canvasElement.getBoundingClientRect()

  startX = event.clientX - rect.left
  startY = event.clientY - rect.top

  isDrawing = true

  if (context.value && tool.value !== 'brush') {
    canvasBuffer = context.value.getImageData(
      0,
      0,
      canvasElement.width,
      canvasElement.height,
    )
  } else {
    context.value?.beginPath()
    context.value?.moveTo(startX, startY)
  }
}

function draw(event: MouseEvent) {
  if (!isDrawing) return

  const canvasElement = canvas.value!
  const rect = canvasElement.getBoundingClientRect()

  currentX = event.clientX - rect.left
  currentY = event.clientY - rect.top

  if (context.value) {
    context.value.lineWidth = lineWidth.value
    context.value.strokeStyle = color.value

    if (tool.value === 'brush') {
      context.value.lineTo(currentX, currentY)
      context.value.stroke()
    } else {
      if (canvasBuffer) {
        context.value.putImageData(canvasBuffer, 0, 0)
      }

      let radius = Math.sqrt(
        (currentX - startX) ** 2 + (currentY - startY) ** 2,
      )

      switch (tool.value) {
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
}

function stopDrawing() {
  isDrawing = false

  if (tool.value !== 'brush' && canvasBuffer && context.value) {
    canvasBuffer = context.value.getImageData(
      0,
      0,
      canvas.value!.width,
      canvas.value!.height,
    )
  }
}

const updateCanvasSize = () => {
  const canvasElement = canvas.value!
  const editorField = document.querySelector('.editor__field') as HTMLElement

  const fieldWidth = editorField.offsetWidth
  const fieldHeight = editorField.offsetHeight

  canvasElement.width = fieldWidth
  canvasElement.height = fieldHeight

  if (context.value) {
    context.value.lineWidth = lineWidth.value
    context.value.strokeStyle = color.value
  }
}

const saveCanvasToFirebase = async () => {
  if (!canvas.value) return

  const dataURL = canvas.value.toDataURL('image/png')

  try {
    await addDoc(collection(db, 'canvas_images'), {
      data: dataURL,
      timestamp: Date.now(),
      email: user?.email,
    })
    toast.success('Image saved successfully!', {
      autoClose: 3000,
      position: 'bottom-left',
      theme: 'colored',
    })
  } catch (error) {}
}

const goToHome = () => {
  router.push('/mini-paint/')
}
</script>

<template>
  <Onboarding page="editor" :steps="stepsEditorOnboarding" />
  <div class="editor">
    <div class="editor__toolbar">
      <button @click="setTool('brush')" class="editor__button brush">
        <img src="../assets/brush.svg" alt="brush" class="editor__icon" />
      </button>
      <button @click="setTool('line')" class="editor__button line">
        <img src="../assets/line.svg" alt="line" class="editor__icon" />
      </button>
      <button @click="setTool('square')" class="editor__button square">
        <img src="../assets/square.svg" alt="triangle" class="editor__icon" />
      </button>
      <button @click="setTool('circle')" class="editor__button circle">
        <img src="../assets/circle.svg" alt="circle" class="editor__icon" />
      </button>
      <button @click="setTool('polygon')" class="editor__button polygon">
        <img src="../assets/polygon.svg" alt="polygon" class="editor__icon" />
      </button>
      <button @click="setTool('star')" class="editor__button star">
        <img src="../assets/star.svg" alt="star" class="editor__icon" />
      </button>

      <label>
        Width:
        <Input
          :input-type="'number'"
          :input-max-width="90"
          v-model="lineWidth"
          min="1"
          max="20"
          class="editor__figure-thickness"
        ></Input>
      </label>
      <Input
        :input-type="'color'"
        :input-max-width="90"
        v-model="color"
        class="editor__color"
      ></Input>

      <button @click="clearCanvas" class="editor__button clean">
        <img src="../assets/clean.svg" alt="clean" class="editor__icon" />
      </button>
      <button class="editor__button save" @click="saveCanvasToFirebase">
        <img src="../assets/save.svg" alt="save" class="editor__icon" />
      </button>
      <button class="editor__button back" @click="goToHome">
        <img src="../assets/back.svg" alt="back" class="editor__icon back" />
      </button>
    </div>
    <div class="editor__field">
      <canvas ref="canvas" class="editor__canvas"></canvas>
    </div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: row;
  height: 100%;
  background: var(--bg-color);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.editor__toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 100%;
  max-height: 100%;
  background-color: var(--primary);
}

.editor__toolbar > .editor__button {
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 30px;
}

.editor__field {
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  background-color: var(--white);
  border: 1px solid #ccc;
}

.editor__canvas {
  width: 100%;
  height: 100%;
}

.editor__icon {
  width: 30px;
  height: 30px;
}

.editor__button {
  background-color: var(--primary);
  border: 2px solid var(--white);
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.editor__button:hover {
  background-color: var(--primary);
  border-color: var(--border-color);
  box-shadow: 0 4px 10px rgba(98, 180, 255, 0.2);
}

.editor__button:active {
  background-color: var(--primary);
  border-color: var(--secondary);
  transform: scale(0.95);
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.editor__button:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
}

.editor__icon {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.editor__button:hover .editor__icon {
  transform: scale(1.1);
}

.editor__button:active .editor__icon {
  transform: scale(0.9);
}

.editor__toolbar label {
  color: var(--white);
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  display: block;
  text-align: center;
}
</style>
