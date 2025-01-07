<script setup lang="ts">
defineProps<{
  title: string
  onSubmit: () => void
  errorMessage: string
}>()
</script>

<template>
  <div class="auth-form-container">
    <form class="auth-form" @submit.prevent="onSubmit">
      <h1>{{ title }}</h1>
      <slot name="inputs"></slot>
      <p v-if="errorMessage" class="auth-form__error">{{ errorMessage }}</p>
      <slot name="footer"></slot>
    </form>
  </div>
</template>

<style scoped>
.auth-form-container {
  padding: 20px 30px;
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  color: var(--black);
}

.auth-form__error {
  color: var(--red);
  font-weight: bold;
}
</style>
