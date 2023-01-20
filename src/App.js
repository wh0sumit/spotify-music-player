import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
import Search from "./components/pages/Search";

import ProtectedRoute from "./utils/ProtectedRoute";

const Login = React.lazy(() => import("./components/pages/Login"));
const Home = React.lazy(() => import("./components/pages/Home"));
const Dashboard = React.lazy(() => import("./components/pages/Dashboard"));
function App() {
  return (
    <React.Fragment>
      <div class="mx-auto max-w-6xl items-center justify-between p-4">
        <Navbar />

        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </React.Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
