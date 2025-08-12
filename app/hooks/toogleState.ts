import { create } from 'zustand'

interface type {
  toogleAddStock: boolean
  setCloseAddStock: () => void
  setToogleAddStock: () => void
  addStockIncrement: number
  setAddStockIncrementPlus: () => void
  setAddStockIncrementMin: () => void
}

const State = create<type>((set) => ({
  toogleAddStock: false,
  setCloseAddStock: () => set({toogleAddStock: true}),
  setToogleAddStock: () => set((state) => ({toogleAddStock: !state.toogleAddStock})),
  addStockIncrement: 0,
  setAddStockIncrementPlus: () => set((state) => ({addStockIncrement: state.addStockIncrement + 1})),
  setAddStockIncrementMin: () => set((state) => ({addStockIncrement: state.addStockIncrement < 0 ? 0 : state.addStockIncrement - 1}))
}))

export default State