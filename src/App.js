import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
import NotFound from "./components/pages/404";

import routes from "./routes";

import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <React.Fragment>
      <div className="items-center justify-between max-w-6xl p-4 mx-auto">
        <Navbar />

        <React.Suspense>
          <Routes>
            {routes.map((route, index) =>
              route.ifProtected ? (
                <Route
                  key={index}
                  path={route.path}
                  element={<ProtectedRoute>{route.element}</ProtectedRoute>}
                  title={route.title}
                  exact={route.exact}
                />
              ) : (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  title={route.title}
                  exact={route.exact}
                />
              )
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
