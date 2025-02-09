<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  buttonText?: string
  variant?: 'primary' | 'icon'
  outlined?: boolean
  disabled?: boolean
}>()

const classes = computed(() => [
  'base-button',
  props.variant,
  { [`outlined-${props.variant}`]: props.outlined, disabled: props.disabled },
])
</script>

<template>
  <button type="submit" :class="classes" :disabled="disabled">
    {{ buttonText }}
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  padding: 10px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.primary {
  background: var(--primary);
  color: white;
}

.primary:hover:not(:disabled) {
  background-color: var(--secondary);
}

.icon {
  background: var(--primary);
  color: white;
  padding: 5px;
}

.icon:hover {
  background-color: var(--secondary);
}

.outlined-primary {
  background: transparent;
  border: 2px solid var(--white);
  color: var(--white);
}

.outlined-primary:hover {
  background: var(--primary);
  color: white;
}

.outlined-icon {
  background: transparent;
  border: 2px solid var(--white);
  color: var(--white);
}

.outlined-icon:hover {
  background: var(--primary);
  color: white;
}

.disabled {
  background-color: #ccc;
  color: #888;
  cursor: not-allowed;
}
</style>
