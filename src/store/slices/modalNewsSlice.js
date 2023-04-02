import { createSlice } from "@reduxjs/toolkit";

export const showModalNews = createSlice({
  name: "showModalNews",
  initialState: {
    value: { show: false, data: { author: "", description: "", url: "" } },
  },
  reducers: {
    showModal: (state, action) => {
      state.value = action.payload;
    },
    getData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { showModal, getData } = showModalNews.actions;
