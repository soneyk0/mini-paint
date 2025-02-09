<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useCanvas } from '../composables/useCanvas'
import { useTool } from '../composables/useTool'
import BaseButton from '../common/BaseButton.vue'
import BaseInput from '../common/BaseInput.vue'
import Onboarding from './Onboarding.vue'
import { stepsEditorOnboarding } from '../stepsStore/stepsStore.ts'
import { clearCanvas } from '../utils/clearCanvas.ts'
import router from '../appRoutes/router.ts'
import store from '../store.ts'

const canvas = ref<HTMLCanvasElement | null>(null)

const { setTool } = useTool()

const { updateCanvasSize, startDrawing, draw, stopDrawing } = useCanvas(canvas)

const clearCanvasHandler = () => {
  if (canvas.value) {
    const context = canvas.value.getContext('2d')
    if (context) {
      clearCanvas(context, canvas.value)
    }
  }
}

const saveCanvasHandler = () => {
  if (canvas.value) store.dispatch('saveImage', canvas.value)
}

const goToHome = () => {
  router.push('/mini-paint/')
}

onMounted(() => {
  updateCanvasSize()

  if (canvas.value) {
    canvas.value.addEventListener('mousedown', (e) => startDrawing(e))
    canvas.value.addEventListener('mousemove', (e) => draw(e))
    canvas.value.addEventListener('mouseup', stopDrawing)
  }
  window.addEventListener('resize', updateCanvasSize)
})

onBeforeUnmount(() => {
  if (canvas.value) {
    canvas.value.removeEventListener('mousedown', (e) => startDrawing(e))
    canvas.value.removeEventListener('mousemove', (e) => draw(e))
    canvas.value.removeEventListener('mouseup', stopDrawing)
  }

  window.removeEventListener('resize', updateCanvasSize)
})
</script>

<template>
  <Onboarding page="editor" :steps="stepsEditorOnboarding" />
  <div class="editor">
    <div class="editor__toolbar">
      <BaseButton
        variant="icon"
        @click="setTool('brush')"
        class="editor__button brush"
      >
        <img src="../assets/brush.svg" alt="brush" class="editor__icon" />
      </BaseButton>

      <BaseButton
        variant="icon"
        @click="setTool('line')"
        class="editor__button line"
      >
        <img src="../assets/line.svg" alt="line" class="editor__icon" />
      </BaseButton>

      <BaseButton
        variant="icon"
        @click="setTool('square')"
        class="editor__button square"
      >
        <img src="../assets/square.svg" alt="triangle" class="editor__icon" />
      </BaseButton>
      <BaseButton
        variant="icon"
        @click="setTool('circle')"
        class="editor__button circle"
      >
        <img src="../assets/circle.svg" alt="circle" class="editor__icon" />
      </BaseButton>

      <BaseButton
        variant="icon"
        @click="setTool('polygon')"
        class="editor__button polygon"
      >
        <img src="../assets/polygon.svg" alt="polygon" class="editor__icon" />
      </BaseButton>

      <BaseButton
        variant="icon"
        @click="setTool('star')"
        class="editor__button star"
      >
        <img src="../assets/star.svg" alt="star" class="editor__icon" />
      </BaseButton>
      <label>
        Width:
        <BaseInput
          :input-type="'number'"
          :input-max-width="90"
          v-model="store.state.lineWidth"
          min="1"
          max="20"
          class="editor__figure-thickness"
        ></BaseInput>
      </label>
      <BaseInput
        :input-type="'color'"
        :input-max-width="90"
        v-model="store.state.color"
        class="editor__color"
      ></BaseInput>

      <BaseButton
        variant="icon"
        class="editor__button clean"
        @click="clearCanvasHandler"
        ><img src="../assets/clean.svg" alt="clean" class="editor__icon"
      /></BaseButton>
      <BaseButton
        variant="icon"
        class="editor__button save"
        @click="saveCanvasHandler"
        ><img src="../assets/save.svg" alt="save" class="editor__icon"
      /></BaseButton>
      <BaseButton variant="icon" class="editor__button back" @click="goToHome"
        ><img src="../assets/back.svg" alt="back" class="editor__icon back"
      /></BaseButton>
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
