import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../axios";



const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem("darkMode")) || false,

};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggle2: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", state.isDarkMode);
    },
  },

});

export const { toggle2 } = darkModeSlice.actions;

export default darkModeSlice.reducer;
