import React, { useState, useEffect } from "react";
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./Sidebar";
import Video from "./Video";
import BasicRating from "./BasicRating";
import RatingDialog from "./RatingDialog";
import { useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { Box, Grid, Container, Typography } from "@mui/material";

const textarea = {
  width: '100%',
  height: '1000px',
  padding: "12px 20px",
  border: "none",
  fontFamily: "Times New Roman, Times, serif",
  fontSize: "20px",
  resize: " none",
}

export default function TaskOfDay(props) {
  const completion = props.completion
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
        <Divider textAlign="left" sx={{color: ''}}><Typography variant="h4">Task - {taskOfDay.name} </Typography> </Divider>
        <div><h2>{taskOfDay.description}</h2>
        <BasicRating rating={taskOfDay.rating}/> 
</div>
        <div className="image">
          {taskOfDay.image ? <img width="60%" height="40%" src={taskOfDay.image} alt="img" /> : null}
        </div>
        {taskOfDay.content ? <textarea style={textarea}>{taskOfDay.content}</textarea> :

          <p>To know more about this topic follow the <a href={taskOfDay.link}> link</a>. Complete all the sections.</p>}

        <div>{taskOfDay.url ? <Video url={taskOfDay.url} /> : null}</div>

        <RatingDialog id={id} completion={taskOfDay.completion} />
      </div>
    )
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>

        {taskToSubmit}

      </Box>
    </Box>

  );
}