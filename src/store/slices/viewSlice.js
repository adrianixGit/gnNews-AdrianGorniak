import { createSlice } from "@reduxjs/toolkit";

export const viewSlice = createSlice({
  name: "view",
  initialState: { value: { list: false } },
  reducers: {
    changeView: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeView } = viewSlice.actions;
