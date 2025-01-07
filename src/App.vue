<script setup lang="ts">
import Button from './common/Button.vue'

const changeTheme = () => {
  document.body.classList.toggle('dark-theme')
}
</script>

<template>
  <Button
    :button-text="'Change the theme'"
    :button-width="10"
    :button-padding="5"
    @click="changeTheme"
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
