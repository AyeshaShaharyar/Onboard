import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AdminPageStyle from './AdminPageStyle';
import Video from "./Video";


import { useParams } from "react-router-dom";

const textarea = {
  width: '100%',
  whiteSpace: 'pre-line',
  padding: "12px 20px",
  border: "none",
  fontFamily: "Times New Roman, Times, serif",
  fontSize: "20px",
  resize: " none",
}

export default function AdminTaskOfDay(props) {
  const completion = props.completion
  const { id } = useParams();

  const [task, setTask] = useState([]);
  // admin/task/${task.id}---employee name, id

  useEffect(() => {
    const URL = `/api/admin/3/tasks/${id}`;
    try {
      axios.get(URL).then((response) => {
       
        setTask(response.data.task);
        console.log("taskofday",response.data);
      });
    } catch (error) {}
  }, []);

  const taskToSubmit = task.map((taskOfDay, index) => {
    
    return (
    
      <div className="App" key={index}>
        
        <h1>Task - {taskOfDay.name}</h1>
        <h2>{taskOfDay.description}</h2>
        { taskOfDay.image ? <img width="80%" height="70%" src={taskOfDay.image} alt="img" /> : null }

        { taskOfDay.content ? <div  style={textarea}>{taskOfDay.content}</div> : 
        
        <p>To know more about this topic follow the <a href={taskOfDay.link}> link</a>. Complete all the sections.</p> }

        <h2>{taskOfDay.url }</h2>
     
      </div>
    )
  })

  return (
    <Box  sx={{ display: 'flex' }}>
    
      <CssBaseline />
      <AdminPageStyle />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>

        {taskToSubmit}

      </Box>
    </Box>

  );
}
