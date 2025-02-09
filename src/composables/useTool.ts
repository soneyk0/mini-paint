import store from '../store.ts'

export function useTool() {
  function setTool(selectedTool: string) {
    store.commit('setTool', selectedTool)
  }

  return { setTool }
}
