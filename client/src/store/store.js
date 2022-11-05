import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import postsReducer from "./postsSlice";
import openLeftbarReducer from "./openLeftbar";
import userReducer from "./userSlice";
import commentReducer from "./commentSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    posts: postsReducer,
    openLeftbar: openLeftbarReducer,
    user: userReducer,
    // comments: commentReducer,
  },
});
