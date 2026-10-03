import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
  rowsPerPage: 10,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const { setLang, setRowsPerPage } = settingsSlice.actions;

export default settingsSlice.reducer;
