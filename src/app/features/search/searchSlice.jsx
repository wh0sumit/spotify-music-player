import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updatePlaylists } from "../playlists/playlistsSlice";

const initialState = {
  loading: false,
  search: {
    tracks: [],
    artists: [],
    albums: [],
    playlists: [],
  },

  error: null,
};

export const searchData = createAsyncThunk(
  "search/searchData",
  async (query, { dispatch }) => {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track,artist,album,playlist&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const searchResult = {
          tracks: data.tracks.items,
          artists: data.artists.items,
          albums: data.albums.items,
          playlists: data.playlists.items,
        };

        dispatch(updatePlaylists(data.playlists.items));
        return searchResult;
      });
    return response;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [searchData.pending]: (state) => {
      state.loading = true;
    },

    [searchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.search = action.payload;
    },

    [searchData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;

