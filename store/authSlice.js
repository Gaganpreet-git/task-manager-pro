import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", JSON.stringify(false));
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
