<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'
import BaseInput from '../common/BaseInput.vue'
import store from '../store.ts'
import { getAuth, signOut } from 'firebase/auth'
import router from '../appRoutes/router.ts'

const filterByUser = (email: string) => {
  store.commit('setSelectedUser', email)
  store.state.showDropdown = false
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
</script>

<template>
  <div class="menu__header">
    <h3>Gallery of images</h3>
    <BaseButton
      :button-text="'Creat image'"
      :button-width="20"
      :button-padding="10"
      @click="goToEditor"
      button-border-color="2px solid var(--white)"
      class="create-button"
    />

    <div class="dropdown">
      <BaseInput
        v-model="store.state.selectedUser"
        :input-type="'search'"
        :input-max-width="200"
        placeholder="Search by user email..."
        @focus="store.state.showDropdown = true"
        @click="resetFilter"
      />
      <ul v-if="store.state.showDropdown" class="dropdown__list">
        <li
          v-for="email in store.state.usersEmail"
          :key="email"
          @click="filterByUser(email)"
        >
          {{ email }}
        </li>
      </ul>
    </div>

    <BaseButton
      :button-text="'Sign out'"
      :button-width="20"
      :button-padding="10"
      @click="loginOut"
      button-border-color="2px solid var(--white)"
      class="signout-button"
    />
  </div>
</template>

<style scoped>
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
</style>
