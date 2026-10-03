import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  admin: null,
  expiresAt: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,
  
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.admin = action.payload.admin;
      state.expiresAt = action.payload.expiresAt;
    },

    logout: (state) => {
      state.token = null;
      state.admin = null;
      state.expiresAt = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;