import React from "react";
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
import TaskOfDay from "./components/TaskOfDay";
import AdminDashboard from "./components/admin/AdminDashboard"
import TaskForm from "./components/admin/TaskForm";
import AdminTasks from "./components/admin/AdminTasks";
import AdminEmployees from "./components/admin/AdminEmployees";

export default function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path= "/task/:id" element={<TaskOfDay />} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/admin/new-task" element={<TaskForm/>} />
        <Route path="/admin/tasks" element={<AdminTasks/>} />
        <Route path="/admin/employees" element={<AdminEmployees/>} />

      </Routes>
    </BrowserRouter>
  )
}
