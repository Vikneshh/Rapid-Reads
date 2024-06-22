// Configured a store with its slice
import { configureStore, createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: "general",
  reducers: {
    setCategory: (state, action) => {
      return action.payload || state;
    },
  },
});

export const { setCategory } = categorySlice.actions;

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});

export default store;
