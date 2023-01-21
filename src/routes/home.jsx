import React from "react";

const Home = React.lazy(() => import("../components/pages/Home"));

export default {
  path: "/",
  element: <Home />,
  title: "Home",
  exact: true,
  ifPorotected: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

