import React from "react";

const Login = React.lazy(() => import("../components/pages/Login"));

export default {
  path: "/login",
  element: <Login />,
  title: "Login",
  exact: true,
  ifProtected: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
