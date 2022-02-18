import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import axios from "axios"
import Sidebar from "./Sidebar";
import TasksTable from "./TasksTable";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import './styles.css';

export default function Tasks() {

  const [tasks, setTasks] = useState([]);

  const handleBtns = function (e) {
    let URL = "/api/employees/3/tasks"
    if (e.target.value === "completed" ) {
      URL = `/api/employees/3/tasks?completion=true`
    } else if (e.target.value === "pending") {
      URL = `/api/employees/3/tasks?completion=false`
    }
    getTasks(URL);
  }

  const getTasks = function (url) {
    try {

      axios.get(url)
        .then((response) => {
          console.log(response.data);
          setTasks(response.data.employeesTasks)
        })
    } catch (error) {

    }
  }

  useEffect(() => {
    let URL = "/api/employees/3/tasks"
    getTasks(URL);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>

        
        <Divider textAlign="left" sx={{color: '#ad1457'}}> <Typography variant="h4">Tasks</Typography></Divider>
  

        <div selected className="Button">
          <Button variant="outlined"  value={"completed"} onClick={handleBtns}>
            <AssignmentTurnedInIcon  fontSize="small"/>Completed</Button>
          <Button variant="outlined"  value={"pending"} onClick={handleBtns}>
            <AssignmentLateIcon  fontSize="small"/>Pending</Button>
          <Button variant="outlined"  value={"all"} onClick={handleBtns}>
            <AssignmentIcon  fontSize="small"/>View All</Button>
        </div>

        <TasksTable
          tasks={tasks}
        />

      </Box>
    </Box>

  )
};
