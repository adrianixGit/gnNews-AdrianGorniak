import { configureStore } from "@reduxjs/toolkit";
import { viewSlice } from "./slices/viewSlice";
import { newsApi } from "./slices/apiNewsSlice";
import { showModalNews } from "./slices/modalNewsSlice";

export const store = configureStore({
  reducer: {
    view: viewSlice.reducer,
    showModal: showModalNews.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});
