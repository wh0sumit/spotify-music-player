import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "../features/token/tokenSlice";
import userSlice from "../features/user/userSlice";
import playlistsSlice from "../features/playlists/playlistsSlice";
import currentPlaylistsSlice from "../features/playlists/currentPlaylistSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
    playlists: playlistsSlice,
    currentPlaylists: currentPlaylistsSlice,
  },
});
export default store;

