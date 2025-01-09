<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import BaseButton from '../common/BaseButton.vue'

type tooltipPositionValues = 'top' | 'bottom' | 'left' | 'right'

export type Step = {
  element: string
  content: string
  tooltipPosition: tooltipPositionValues
}

const props = defineProps<{
  steps: Array<Step>
  page: 'main' | 'editor'
}>()

const isActive = ref(false)
const currentStep = ref(0)
const highlightStyle = ref({})
const tooltipStyle = ref({})
const userEmail = ref<string | null>(null)

const updateHighlight = async () => {
  await nextTick()
  const step = props.steps[currentStep.value]
  const target = document.querySelector(step.element) as HTMLElement
  if (target) {
    const rect = target.getBoundingClientRect()
    highlightStyle.value = {
      top: `${rect.top + window.scrollY}px`,
      left: `${rect.left + window.scrollX}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    }
    tooltipStyle.value = {
      top: `${rect.bottom + window.scrollY}px`,
      left: `${rect.left + window.scrollX}px`,
    }

    switch (step.tooltipPosition) {
      case 'top':
        tooltipStyle.value = {
          top: `${rect.top + window.scrollY - 100}px`,
          left: `${rect.left + window.scrollX + rect.width / 2 - 100}px`,
        }
        break
      case 'left':
        tooltipStyle.value = {
          top: `${rect.top + window.scrollY + rect.height / 2 - 40}px`,
          left: `${rect.left + window.scrollX - 220}px`,
        }
        break
      case 'right':
        tooltipStyle.value = {
          top: `${rect.top + window.scrollY + rect.height / 2 - 40}px`,
          left: `${rect.right + window.scrollX + 10}px`,
        }
        break
      default:
        tooltipStyle.value = {
          top: `${rect.bottom + window.scrollY + 5}px`,
          left: `${rect.left + window.scrollX + rect.width / 2 - 100}px`,
        }
    }
  }
}

const checkOnboardingStatus = (email: string) => {
  const completedKey = `onboardingCompleted_${email}_${props.page}`
  const completed = localStorage.getItem(completedKey)
  isActive.value = !completed
}

const nextStep = () => {
  if (currentStep.value < props.steps.length - 1) {
    currentStep.value++
    updateHighlight()
  } else {
    endOnboarding()
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
    updateHighlight()
  }
}

const skip = () => {
  endOnboarding()
}

const endOnboarding = () => {
  if (userEmail.value) {
    const completedKey = `onboardingCompleted_${userEmail.value}_${props.page}`
    localStorage.setItem(completedKey, 'true')

    if (props.page === 'main') {
      localStorage.setItem(`onboardingStep`, 'editor')
    }

    isActive.value = false
  }
}

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user && user.email) {
      userEmail.value = user.email
      checkOnboardingStatus(user.email)
      if (isActive.value) updateHighlight()
    }
  })
})
</script>

<template>
  <div v-if="isActive" class="onboarding-overlay">
    <div class="onboarding-highlight" :style="highlightStyle"></div>
    <div class="onboarding-tooltip" :style="tooltipStyle">
      <p>{{ steps[currentStep].content }}</p>
      <div class="onboarding-buttons">
        <BaseButton
          :button-width="50"
          :button-padding="5"
          button-text="Back"
          @click="prevStep"
          :disabled="currentStep === 0"
        />
        <BaseButton
          :button-width="50"
          :button-padding="5"
          button-text="Next"
          @click="nextStep"
          :disabled="currentStep === steps.length - 1"
        />
        <BaseButton
          :button-width="50"
          :button-padding="5"
          button-text="Skip"
          @click="skip"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.onboarding-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.onboarding-highlight {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.onboarding-tooltip {
  position: absolute;
  background: var(--white);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  width: 200px;
}

.onboarding-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
