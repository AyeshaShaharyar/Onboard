import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios"
import TasksTable from "./TasksTable";

export default function Tasks() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const URL = "/api/admin/tasks"
    try {
      axios.get(URL)
        .then((response) => {
          console.log(response.data);
          setTasks(response.data.employeesTasks)
        })
    } catch (error) {

    }
  }, []);

  return (
      <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>

     
    <TasksTable
      tasks={tasks}
    />

    </Box>
  </Box>

)
};
