import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "../features/token/tokenSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
  },
});
export default store;

