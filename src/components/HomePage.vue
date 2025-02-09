<script setup lang="ts">
import { onMounted } from 'vue'
import Onboarding from './Onboarding.vue'
import { stepsHomePageOnboarding } from '../stepsStore/stepsStore.ts'
import Paginator from './Paginator.vue'
import Gallery from './Gallery.vue'
import Header from './Header.vue'
import store from '../store.ts'

onMounted(async () => {
  store.dispatch('loadImages')
  document.body.addEventListener('click', handleClickOutside)
})

const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.dropdown')
  if (dropdown && !dropdown.contains(event.target as Node)) {
    store.state.showDropdown = false
  }
}
</script>

<template>
  <Onboarding :steps="stepsHomePageOnboarding" page="main" />
  <div class="menu">
    <Header />
    <Gallery />
    <Paginator />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
}
</style>
