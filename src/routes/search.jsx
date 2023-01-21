import React from "react";

const Search = React.lazy(() => import("../components/pages/Search"));

export default {
  path: "/search",
  element: <Search />,
  title: "Search",
  exact: true,
  ifProtected: true,
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
