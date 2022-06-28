import create from 'zustand'

const useStore = create(set => ({
  students: {},
  activities: {},
  conversations: {},
  messages: {},
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore;