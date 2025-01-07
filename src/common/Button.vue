<script setup lang="ts">

defineProps<{
  buttonText?: string
  buttonWidth:number
  buttonPadding:number
  buttonBorderColor?:string
}>()
</script>
<template>
  <button type="submit" :style="{ width: buttonWidth + '%',
  padding:buttonPadding + 'px',
  border: buttonBorderColor}">
    {{ buttonText }}
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--secondary);
}

</style>