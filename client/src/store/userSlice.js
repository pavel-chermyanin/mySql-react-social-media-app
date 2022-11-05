import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../axios";

export const login = createAsyncThunk("user/login", async (inputs) => {
  const { data } = await makeRequest.post("auth/login", inputs, {
    withCredentials: true,
  });
  return data;
});

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        localStorage.setItem("user", JSON.stringify(state.currentUser));
      })
      .addCase(login.pending, (state, action) => {});
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
