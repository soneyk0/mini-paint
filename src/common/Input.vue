<script setup lang="ts">

defineProps<{
  inputMaxWidth:number
  inputType: string
  modelValue?: string | number |null  ;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
}
</script>
<template>
  <input :type ="inputType"
         :style="{ maxWidth: inputMaxWidth + 'px'}"
         :value="modelValue"
         @input="updateValue"></input>
</template>

<style scoped>
input{
  border: 2px solid var(--white);
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 14px;
  width: 100%;
  margin-top: 5px;
  background-color: var(--white);
  transition: border-color 0.3s ease;
}

input:focus{
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px rgba(98, 180, 255, 0.2);
}

input:hover{
  outline: none;
  border-color: #62b4ff;
  box-shadow: 0 0 0 3px rgba(98, 180, 255, 0.2);
}

input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>