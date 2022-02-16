import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./Sidebar";
// import TasksTable from "./TasksTable";
import axios from "axios"
const Tasks = function(){

  const [task, setTask] = useState("h1")

    // "/tasks/:task_id/:employee_id"
  useEffect(()=>{
    const URL = "api/users/tasks/3"
    try {
      axios.get(URL)
      .then((response)=>{
          setTask(response.data.employeesTask)
          console.log(response.data);
      })
    } catch (error) {

    }
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <h1>{task}</h1>
        <h1>It is Task</h1>
      {/* <TasksTable /> */}
      
      
      </Box>
    </Box>
 
  )
}

export default Tasks;