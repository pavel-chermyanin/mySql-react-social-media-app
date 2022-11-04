import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import postsReducer from "./postsSlice";
import openLeftbarReducer from "./openLeftbar";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    posts: postsReducer,
    openLeftbar: openLeftbarReducer,
  },
});
