<script setup lang="ts">
import { onMounted } from 'vue'
import BaseButton from '../common/BaseButton.vue'
import {
  type Step,
  useOnboardingSteps,
} from '../composables/useOnboardingSteps.ts'
import { useOnboarding } from '../composables/useOnboarding.ts'

const props = defineProps<{
  steps: Step[]
  page: 'main' | 'editor'
}>()

const { isActive, endOnboarding } = useOnboarding(props.page)
const {
  currentStep,
  highlightStyle,
  tooltipStyle,
  nextStep,
  prevStep,
  updateHighlight,
} = useOnboardingSteps(props.steps, endOnboarding)

onMounted(() => {
  if (isActive.value) updateHighlight()
})
</script>

<template>
  <div v-if="isActive" class="onboarding-overlay">
    <div class="onboarding-highlight" :style="highlightStyle"></div>
    <div class="onboarding-tooltip" :style="tooltipStyle">
      <p>{{ steps[currentStep].content }}</p>
      <div class="onboarding-buttons">
        <BaseButton
          :outlined="false"
          variant="primary"
          button-text="Back"
          @click="prevStep"
          :disabled="currentStep === 0"
        />
        <BaseButton
          :outlined="false"
          variant="primary"
          button-text="Next"
          @click="nextStep"
          :disabled="currentStep === steps.length - 1"
        />
        <BaseButton
          :outlined="false"
          variant="primary"
          button-text="Skip"
          @click="endOnboarding"
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
  width: 300px;
}

.onboarding-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
