<script setup lang="ts">
import store from '../store.ts'
</script>

<template>
  <div class="menu__gallery">
    <div v-if="store.getters.paginatedImages.length > 0" class="gallery">
      <div
        v-for="(image, index) in store.getters.paginatedImages"
        :key="index"
        class="gallery__item"
      >
        <img :src="image.data" alt="Canvas Image" class="gallery__image" />
      </div>
    </div>
    <p v-else>No images available.</p>
  </div>
</template>

<style scoped>
.menu__gallery {
  flex-grow: 1;
  overflow: hidden;
  overflow-y: auto;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-left: 25px;
  margin-top: 25px;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
}

.gallery__item {
  width: 30%;
  box-sizing: border-box;
  background-color: var(--white);
  @media (max-width: 640px) {
    width: 90%;
  }
}

.gallery__image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
