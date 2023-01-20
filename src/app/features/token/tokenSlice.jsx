import { createSlice } from "@reduxjs/toolkit";

const access_token = localStorage.getItem("access_token") || null;

const initialState = {
  access_token,
  expires_in: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
      state.expires_in = action.payload.expires_in;
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;

