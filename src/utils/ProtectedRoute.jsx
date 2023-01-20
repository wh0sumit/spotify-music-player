import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.token.access_token);
  let location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
};

export default ProtectedRoute;

