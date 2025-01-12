import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  //   items: 0,
};

const favSlice = createSlice({
  name: "fav",
  initialState: initialState,
  reducers: {
    addToFav: (state, action) => {
      const existProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOneFromFav: (state, action) => {
      state.items= state.items.filter(
        (item) => item.id !== action.payload
      );
     
    },
    removeAllFromFav: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFav,removeAllFromFav, removeOneFromFav } = favSlice.actions;
export default favSlice.reducer;
