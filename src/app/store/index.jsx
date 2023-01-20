import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "../features/token/tokenSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});
export default store;

