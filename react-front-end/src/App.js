import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Dashboard from "./components/Dashboard";
import Tasks from "./components//tasks/Tasks";
import Profile from "./components/Profile";
import About from "./components/About";
import TaskOfDay from "./components/tasks/TaskOfDay";

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
      </Routes>
    </BrowserRouter>
  )
};
