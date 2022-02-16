

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import Settings from "./components/Settings";
import About from "./components/About";
import React from "react";

export default function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
