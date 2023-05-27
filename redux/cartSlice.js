// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.cart = [...state.cart, actions.payload.cart];
    },
    remove: (state) => {
      state.cart = [];
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
