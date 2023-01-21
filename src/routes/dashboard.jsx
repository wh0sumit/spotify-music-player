import React from "react";

const Dashboard = React.lazy(() => import("../components/pages/Dashboard"));
export default {
  path: "/dashboard",
  element: <Dashboard />,
  title: "Dashboard",
  exact: true,
  ifProtected: true,
};
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

