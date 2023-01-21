import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "../../../app/features/user/userSlice";
import { fetchPlaylists } from "../../../app/features/playlists/playlistsSlice";
import Playlists from "../../organism/Playlists";

export default function Dashboard() {
  const token = useSelector((state) => state.token.access_token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
      dispatch(fetchPlaylists(token));
    }
  }, [dispatch, token]);

  return (
    <React.Fragment>
      <Playlists />
    </React.Fragment>
  );
}
