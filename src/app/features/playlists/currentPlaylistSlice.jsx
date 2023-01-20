import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const currentPlaylist =
  JSON.parse(localStorage.getItem("currentPlaylist")) || null;

const initialState = {
  loading: false,
  currentPlaylist,
  error: null,
};

export const fetchCurrentPlaylist = createAsyncThunk(
  "currentPlaylist/fetchCurrentPlaylist",
  async (id) => {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        const selectedPlaylist = {
          id: data.id,
          name: data.name,
          image: data.images[0].url,
          tracks: data.tracks.items.map((track) => {
            return {
              id: track.track.id,
              name: track.track.name,
              artist: track.track.artists.map((artist) => artist.name),
              album: track.track.album.name,
              image: track.track.album.images[2].url,
              duration: track.track.duration_ms,
              preview: track.track.preview_url,
              uri: track.track.uri,
              explicit: track.track.explicit,
              popularity: track.track.popularity,
              added_at: track.added_at,
              added_by: track.added_by.id,
            };
          }),
        };

        localStorage.setItem(
          "currentPlaylist",
          JSON.stringify(selectedPlaylist)
        );

        return selectedPlaylist;
      });
    return response;
  }
);

const currentPlaylistSlice = createSlice({
  name: "currentPlaylist",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentPlaylist.pending]: (state) => {
      state.loading = true;
    },
    [fetchCurrentPlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPlaylist = action.payload;
      state.error = null;
    },

    [fetchCurrentPlaylist.rejected]: (state, action) => {
      state.loading = false;
      state.currentPlaylist = null;
      state.error = action.payload;
    },
  },
});

export default currentPlaylistSlice.reducer;

