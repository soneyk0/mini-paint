import { createStore } from 'vuex'

interface Image {
  data: string
  email: string
  timestamp: number
}

// Состояние
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
