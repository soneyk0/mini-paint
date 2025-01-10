<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import router from '../appRoutes/router.js'
import Button from '../common/BaseButton.vue'
import { onMounted, ref } from 'vue'
import { db } from '../main.ts'
import { collection, query, getDocs } from 'firebase/firestore'
import Input from '../common/BaseInput.vue'
import Onboarding from './Onboarding.vue'
import { stepsHomePageOnboarding } from '../stepsStore/stepsStore.ts'
import { useStore } from 'vuex'

const showDropdown = ref(false)
const store = useStore()

onMounted(async () => {
  const q = query(collection(db, 'canvas_images'))
  const querySnapshot = await getDocs(q)
  const emailSet = new Set<string>()

  const images = querySnapshot.docs
    .map((doc) => {
      const data = doc.data()
      if (data.email) {
        emailSet.add(data.email)
      }
      return { data: data.data, email: data.email, timestamp: data.timestamp }
    })
    .sort((a, b) => b.timestamp - a.timestamp)

  store.commit('setImages', images)
  store.commit('setUsersEmail', Array.from(emailSet))
  document.body.addEventListener('click', handleClickOutside)
})

const filterByUser = (email: string) => {
  store.commit('setSelectedUser', email)
  showDropdown.value = false
  store.state.currentPage = 1
}

const resetFilter = () => {
  store.commit('resetFilter')
}

const loginOut = () => {
  const auth = getAuth()
  signOut(auth).then(() => {
    router.push('/mini-paint/login')
  })
}

const goToEditor = () => {
  router.push('/mini-paint/editor')
}

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

const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.dropdown')
  if (dropdown && !dropdown.contains(event.target as Node)) {
    showDropdown.value = false
  }
}
</script>

<template>
  <Onboarding :steps="stepsHomePageOnboarding" page="main" />
  <div class="menu">
    <div class="menu__header">
      <h3>Gallery of images</h3>
      <Button
        :button-text="'Creat image'"
        :button-width="20"
        :button-padding="10"
        @click="goToEditor"
        button-border-color="2px solid var(--white)"
        class="create-button"
      />

      <div class="dropdown">
        <Input
          v-model="store.state.selectedUser"
          :input-type="'search'"
          :input-max-width="200"
          placeholder="Search by user email..."
          @focus="showDropdown = true"
          @click="resetFilter"
        />
        <ul v-if="showDropdown" class="dropdown__list">
          <li
            v-for="email in store.state.usersEmail"
            :key="email"
            @click="filterByUser(email)"
          >
            {{ email }}
          </li>
        </ul>
      </div>

      <Button
        :button-text="'Sign out'"
        :button-width="20"
        :button-padding="10"
        @click="loginOut"
        button-border-color="2px solid var(--white)"
        class="signout-button"
      />
    </div>
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

    <div class="menu__pagination" v-if="store.getters.totalPages">
      <Button
        :button-width="10"
        :button-padding="5"
        @click="handlePreviousPage"
        :disabled="store.state.currentPage === 1"
      >
        <img
          src="../assets/left-arrow.svg"
          alt="left"
          class="menu__pagination-icon"
        />
      </Button>
      <span
        >Page {{ store.state.currentPage }} of
        {{ store.getters.totalPages }}</span
      >
      <Button
        :button-width="10"
        :button-padding="5"
        @click="handleNextPage"
        :disabled="store.state.currentPage === store.getters.totalPages"
      >
        <img
          src="../assets/right-arrow.svg"
          alt="right"
          class="menu__pagination-icon"
        />
      </Button>
    </div>
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

.menu__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  background-color: var(--primary);
}

h3 {
  color: var(--white);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: var(--white);
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 5px 0;
  list-style: none;
}

.dropdown__list li {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown__list li:hover {
  background: #f0f0f0;
}

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
</style>
