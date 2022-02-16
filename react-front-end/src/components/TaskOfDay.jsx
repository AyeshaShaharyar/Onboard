import React, { useState, useEffect } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
export default function TaskOfDay (props) {

  const { id } = useParams();

  const [task, setTask] = useState([]);

  useEffect(() => {
    const URL = `/api/employees/3/tasks/${id}`
    try {
      axios.get(URL)
        .then((response) => {
          console.log(response.data);
          setTask(response.data.task)
        })
    } catch (error) {

    }
  }, []);

  const taskToSubmit = task.map((taskOfDay) => {
    return (
      
      <div className="App">
          <h1>It is {taskOfDay.name}</h1>
          <h2>{taskOfDay.description}</h2>
         
          <h2>{taskOfDay.url}</h2> 
      </div>
    ) })

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
      <Sidebar/>
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      
     {taskToSubmit}

      
      
    </Box>
  </Box>

  );
}