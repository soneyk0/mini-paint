import { createStore } from 'vuex'
import {
  fetchImagesAndUsers,
  onAuthStateChangedListener,
  registerUser,
  saveCanvasToFirebase,
  signInWithEmail,
  signOutUser,
} from './services/firebaseService.ts'

interface Image {
  data: string
  email: string
  timestamp: number
}

interface State {
  images: Image[]
  filteredImages: Image[]
  usersEmail: string[]
  selectedUser: string | null
  currentPage: number
  itemsPerPage: number
  color: string
  lineWidth: number
  tool: string
  showDropdown: boolean
}

const store = createStore<State>({
  state: {
    images: [] as Image[],
    filteredImages: [],
    usersEmail: [],
    selectedUser: null,
    currentPage: 1,
    itemsPerPage: 6,
    color: '#000000',
    lineWidth: 2,
    tool: 'brush',
    showDropdown: false,
  },
  mutations: {
    setImages(state: State, images: Image[]) {
      state.images = images
      state.filteredImages = [...images]
    },
    setUsersEmail(state: State, usersEmail: string[]) {
      state.usersEmail = usersEmail
    },
    setSelectedUser(state: State, email: string) {
      state.selectedUser = email
      state.filteredImages = state.images.filter((img) => img.email === email)
    },
    resetFilter(state: State) {
      state.selectedUser = null
      state.filteredImages = [...state.images]
    },
    setTool(state: State, tool: string) {
      state.tool = tool
    },
  },
  actions: {
    async loadImages({ commit }) {
      const { images, usersEmail } = await fetchImagesAndUsers()
      commit('setImages', images)
      commit('setUsersEmail', usersEmail)
    },
    async saveImage(_, canvas: HTMLCanvasElement) {
      await saveCanvasToFirebase(canvas)
    },
    async login({ commit }, { email, password }) {
      await signInWithEmail(email, password)
      commit('setUser', email)
    },
    async register({ commit }, { email, password }) {
      await registerUser(email, password)
      commit('setUser', email)
    },
    async logout({ commit }) {
      await signOutUser()
      commit('setUser', null)
    },
    initializeAuth({ dispatch }) {
      onAuthStateChangedListener((email: string) => {
        dispatch('setUserEmail', email) // Диспатчим email пользователя в стора
      })
    },
  },
  getters: {
    totalPages(state: State) {
      return Math.ceil(state.filteredImages.length / state.itemsPerPage)
    },
    paginatedImages(state: State) {
      const start = (state.currentPage - 1) * state.itemsPerPage
      const end = start + state.itemsPerPage
      return state.filteredImages.slice(start, end)
    },
  },
})

export default store
