// src/stores/cart.js

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    statusTab: false,
  },
  reducers: {
    toggleStatusTab: (state) => {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
