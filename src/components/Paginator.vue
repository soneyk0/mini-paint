<script setup lang="ts">
import store from '../store.ts'
import BaseButton from '../common/BaseButton.vue'

const handlePreviousPage = () => {
  if (store.state.currentPage > 1) {
    store.state.currentPage--
  }
}

const handleNextPage = () => {
  if (store.state.currentPage < store.getters.totalPages) {
    store.state.currentPage++
  }
}
</script>

<template>
  <div class="menu__pagination" v-if="store.getters.totalPages">
    <BaseButton
      variant="icon"
      @click="handlePreviousPage"
      :disabled="store.state.currentPage === 1"
      class="menu__pagination-button"
    >
      <img
        src="../assets/left-arrow.svg"
        alt="left"
        class="menu__pagination-icon"
      />
    </BaseButton>

    <span
      >Page {{ store.state.currentPage }} of
      {{ store.getters.totalPages }}</span
    >

    <BaseButton
      variant="icon"
      @click="handleNextPage"
      :disabled="store.state.currentPage === store.getters.totalPages"
      class="menu__pagination-button"
    >
      <img
        src="../assets/right-arrow.svg"
        alt="right"
        class="menu__pagination-icon"
      />
    </BaseButton>
  </div>
</template>

<style scoped>
.menu__pagination {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 18px;
}

.menu__pagination-icon {
  width: 15px;
  height: 15px;
}
.menu__pagination-button {
  padding: 7px 30px;
}
</style>
