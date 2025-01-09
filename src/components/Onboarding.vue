<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import BaseButton from '../common/BaseButton.vue'

type Step = {
  element: string
  content: string
}

const props = defineProps<{
  steps: Step[]
  paddingTop: number
  paddingLeft: number
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
      top: `${rect.bottom + window.scrollY + props.paddingTop}px`,
      left: `${rect.left + window.scrollX + props.paddingLeft}px`,
    }
  }
}

const checkOnboardingStatus = (email: string) => {
  const completedKey = `onboardingCompleted_${email}_${props.page}`
  const completed = localStorage.getItem(completedKey)
  isActive.value = !completed // Если нет записи в localStorage, показываем онбординг

  console.log(
    `Onboarding status for ${email} on ${props.page}: ${
      completed ? 'Completed' : 'Active'
    }`,
  )
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
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  min-width: 250px;
}

.onboarding-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
