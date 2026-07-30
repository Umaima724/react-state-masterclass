import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice += newItem.price
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        })
      }
      state.totalQuantity += 1
      state.totalAmount += newItem.price
    },
    removeItem: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (!existingItem) return

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity -= 1
        existingItem.totalPrice -= existingItem.price
      }
      state.totalQuantity -= 1
      state.totalAmount -= existingItem.price
    },
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer