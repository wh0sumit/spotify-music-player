import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Artists from "./components/Template/Artists";
import Playlists from "./components/Template/Playlists";
import Tracks from "./components/Template/Tracks";
import ProtectedRoute from "./utils/ProtectedRoute";
import Favourites from "./components/pages/Favourites";

function App() {
  return (
    <React.Fragment>
      <div class="mx-auto max-w-6xl items-center justify-between p-4">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Route path="playlists" element={<Playlists />} />
                  <Route path="tracks" element={<Tracks />} />
                  <Route path="artists" element={<Artists />} />
                </Dashboard>
              </ProtectedRoute>
            }
          />
          <Route
            path="/favourites"
            element={
              <ProtectedRoute>
                <Favourites />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
