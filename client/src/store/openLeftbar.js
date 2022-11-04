import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../axios";

const initialState = {
  isOpenLeftbar: false,
};

export const openLeftbar = createSlice({
  name: "openLeftbar",
  initialState,
  reducers: {
    setOpenLeftbar: (state,action) => {
      state.isOpenLeftbar =
        !action.payload && action.payload !== false
          ? !state.isOpenLeftbar
          : action.payload;
    },
  },
});

export const { setOpenLeftbar } = openLeftbar.actions;

export default openLeftbar.reducer;
