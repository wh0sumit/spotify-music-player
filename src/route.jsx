import React from "react";

const Playlists = React.lazy(() => import("./components/organism/Playlists"));

const routes = [
  {
    path: "/playlist",
    element: <Playlists />,
  },
];

export default routes;

