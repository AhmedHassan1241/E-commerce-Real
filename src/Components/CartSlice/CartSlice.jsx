import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  //   items: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOneFromCart: (state, action) => {
      const existProduct = state.items.find(
        (item) => item.id === action.payload
      );
      if (existProduct) {
        if (existProduct.quantity > 1) {
          existProduct.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
        }
    },
    removeAllFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart,removeAllFromCart, removeOneFromCart } = cartSlice.actions;
export default cartSlice.reducer;
