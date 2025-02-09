import { ref, nextTick, onMounted } from 'vue'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export type Step = {
  element: string
  content: string
  tooltipPosition: TooltipPosition
}

export function useOnboardingSteps(steps: Step[], endOnboarding: () => void) {
  const currentStep = ref(0)
  const highlightStyle = ref({})
  const tooltipStyle = ref({})

  const updateHighlight = async () => {
    await nextTick()
    const step = steps[currentStep.value]
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
            left: `${rect.left + window.scrollX - 300}px`,
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

  const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
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

  onMounted(async () => {
    await nextTick()
    updateHighlight()
  })

  return {
    currentStep,
    highlightStyle,
    tooltipStyle,
    nextStep,
    prevStep,
    updateHighlight,
  }
}
