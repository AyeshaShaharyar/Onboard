import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import Profile from "./components/Profile";
import About from "./components/About";
import TaskOfDay from "./components/TaskOfDay";

export default function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path= "/task/:id" element={<TaskOfDay />} />
      </Routes>
    </BrowserRouter>
  )
}
