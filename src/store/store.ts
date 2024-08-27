import { blogPosts } from "@/features/postsSlice";
import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    [blogPosts.reducerPath]: blogPosts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogPosts.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
