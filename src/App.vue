<script setup lang="ts">
import Button from './common/BaseButton.vue'
import { onMounted } from 'vue'

const changeTheme = () => {
  document.body.classList.toggle('dark-theme')
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('darkTheme', '1')
  } else {
    localStorage.removeItem('darkTheme')
  }
}

onMounted(() => {
  const isDarkTheme = localStorage.getItem('darkTheme')
  if (isDarkTheme) {
    document.body.classList.toggle('dark-theme')
  }
})
</script>

<template>
  <Button
    :button-text="'Change the theme'"
    variant="primary"
    @click="changeTheme"
    class="change-theme-button"
  />
  <div class="display">
    <router-view />
  </div>
</template>

<style scoped>
.display {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--white);
  border: 2px solid var(--primary);
  border-radius: 15px;
  height: 100%;
  width: 100%;
  max-width: 762px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
