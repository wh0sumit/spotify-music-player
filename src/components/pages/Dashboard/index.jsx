import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlaylists } from "../../../app/features/playlists/playlistsSlice";
import Playlists from "../../organism/Playlists";
import axios from "axios";
import { setUser } from "../../../app/features/user/userSlice";

export default function Dashboard() {
  const token = useSelector((state) => state.token.access_token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
        })
        .catch((err) => console.log(err));

      dispatch(fetchPlaylists(token));
    }
  }, [dispatch, token]);

  return (
    <React.Fragment>
      <Playlists />
    </React.Fragment>
  );
}
