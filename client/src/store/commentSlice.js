import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../axios";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId) => {
    const { data } = await makeRequest.get("/comments?postId=" + postId);
    return data;
  }
);
export const addComment = createAsyncThunk("comments/addComment", async (commentData) => {
  const { data } = await makeRequest.post("/comments", commentData);
  return data;
});

const initialState = {
  comments: {},
  isLoadingComments: false,
  error: false,
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments[action.payload[0]?.postId] = action.payload;
        state.isLoadingComments = false;
      })
      .addCase(fetchComments.pending, (state) => {
        state.isLoadingComments = true;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoadingComments = false;
        state.error = true;
      })
      .addCase(addComment.fulfilled, (state,action) => {
        state.comments[action.payload[0].postId].push(action.payload);
      });
  },
});

export const selectComments = (postId) => (state) => state.comments[postId];

export const {} = commentSlice.actions;

export default commentSlice.reducer;
