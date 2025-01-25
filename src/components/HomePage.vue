<script setup lang="ts">
import { onMounted } from 'vue'
import { db } from '../main.ts'
import { collection, query, getDocs } from 'firebase/firestore'
import Onboarding from './Onboarding.vue'
import { stepsHomePageOnboarding } from '../stepsStore/stepsStore.ts'
import { useStore } from 'vuex'
import Paginator from './Paginator.vue'
import Gallery from './Gallery.vue'
import Header from './Header.vue'

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

const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.dropdown')
  if (dropdown && !dropdown.contains(event.target as Node)) {
    store.state.showDropdown = false
  }
}
</script>

<template>
  <Onboarding :steps="stepsHomePageOnboarding" page="main" />
  <div class="menu">
    <Header />
    <Gallery />
    <Paginator />
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
</style>
