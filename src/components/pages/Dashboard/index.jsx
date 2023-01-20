import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "../../../app/features/user/userSlice";

export default function Dashboard() {
  const token = useSelector((state) => state.token.access_token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token, dispatch]);

  return (
    <React.Fragment>
      <div
        aria-label="Page Content"
        class="bg-gray-50 rounded-2xl px-4 py-8"
      ></div>
    </React.Fragment>
  );
}
