import { ref, onMounted } from 'vue'
import { onAuthStateChangedListener } from '../services/firebaseService.ts'

export const useOnboarding = (page: 'main' | 'editor') => {
  const isActive = ref(false)
  const currentStep = ref(0)
  const userEmail = ref<string | null>(null)

  const checkOnboardingStatus = (email: string) => {
    const completedKey = `onboardingCompleted_${email}_${page}`
    isActive.value = !localStorage.getItem(completedKey)
  }

  const endOnboarding = () => {
    if (userEmail.value) {
      localStorage.setItem(
        `onboardingCompleted_${userEmail.value}_${page}`,
        'true',
      )
      if (page === 'main') localStorage.setItem(`onboardingStep`, 'editor')
      isActive.value = false
    }
  }

  onMounted(() => {
    onAuthStateChangedListener((email: string) => {
      userEmail.value = email
      checkOnboardingStatus(email)
    })
  })

  return { isActive, currentStep, endOnboarding }
}
