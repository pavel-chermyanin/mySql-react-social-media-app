import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../axios";

export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await makeRequest.get("/posts");
  return data;
});
export const addPost = createAsyncThunk("posts/addPost", async (inputs) => {
  const { data } = await makeRequest.post("/posts", inputs);
  return data;
});

const initialState = {
  posts: [],
  isLoadingPosts: false,
  error: false
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
      .addCase(fetchPosts.pending, (state) => {
        state.isLoadingPosts = true;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoadingPosts = false;
        state.error = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
        // state.isLoadingPosts = false;
      })
      .addCase(addPost.pending, (state) => {
      //   state.isLoadingPosts = true;
      })
      // .addCase(addPost.rejected, (state) => {
      //   state.isLoadingPosts = false;
      //   state.error = true;
      // });
  },
});

export const { } = postsSlice.actions;

export default postsSlice.reducer;
