import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Dashboard from "./components/Dashboard";
import Tasks from "./components/tasks_employee/Tasks";
import Profile from "./components/Profile";
import About from "./components/About";
import TaskOfDay from "./components/tasks_employee/TaskOfDay";
import AdminDashboard from "./components/admin/AdminDashboard"
import TaskForm from "./components/admin/TaskForm";
import AdminTasks from "./components/admin/AdminTasks";
import AdminEmployees from "./components/admin/AdminEmployees";
import AdminTaskOfDay from "./components/admin/AdminTaskOfDay";

export default function App (){

  const [employeeName, setEmployeeName] = useState('')
  
  // /api/employees/3/tasks
  useEffect(()=>{
    const URL = "/api/employees/3/tasks"
    try {
      axios.get(URL)
      .then((response)=>{
        if (response.data.employeesTasks) {
          setEmployeeName(response.data.employeesTasks[0].fname)
        }
        
      })
    } catch (error) {
      
    }
  }, []); 

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard employeeName={employeeName}/>} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path= "/task/:id" element={<TaskOfDay />} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/admin/new-task" element={<TaskForm/>} />
        <Route path="/admin/tasks" element={<AdminTasks/>} />
        <Route path="/admin/employees" element={<AdminEmployees/>} />
        <Route path="/tasks/:id" element={<AdminTaskOfDay/>} />

      </Routes>
    </BrowserRouter>
  )
};
