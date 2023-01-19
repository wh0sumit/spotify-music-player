import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
  return (
    <React.Fragment>
      <div class="mx-auto max-w-5xl items-center justify-between p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

