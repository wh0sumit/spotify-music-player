import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const playlists = JSON.parse(localStorage.getItem("playlists")) || null;

const initialState = {
  loading: false,
  playlists,
  error: null,
};

export const fetchPlaylists = createAsyncThunk(
  "playlists/fetchPlaylists",
  async (token) => {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("playlists", JSON.stringify(data.items));

        return data;
      });
    return response;
  }
);

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    defaultPlaylists: (state) => {
      state.playlists = JSON.parse(localStorage.getItem("playlists")) || null;
    },

    clearPlaylists: (state) => {
      state.playlists = localStorage.removeItem("playlists");
    },
    updatePlaylists: (state, action) => {
      state.playlists = action.payload;
    },
  },
  extraReducers: {
    [fetchPlaylists.pending]: (state) => {
      state.loading = true;
    },
    [fetchPlaylists.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action.payload.items;
      state.error = null;
    },
    [fetchPlaylists.rejected]: (state, action) => {
      state.loading = false;
      state.playlists = null;
      state.error = action.payload;
    },
  },
});

export const { defaultPlaylists, clearPlaylists, updatePlaylists } =
  playlistsSlice.actions;

export default playlistsSlice.reducer;

