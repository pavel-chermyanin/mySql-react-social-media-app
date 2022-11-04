import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../axios";

export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await makeRequest.get("/posts");
  return data;
});

const initialState = {
  posts: [],
  isLoadingPosts: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoadingPosts = false;
      })
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoadingPosts = true;
      });
  },
});

export const { } = postsSlice.actions;

export default postsSlice.reducer;
