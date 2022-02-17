import React, { useState, useEffect } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./Sidebar";
import Video from "./Video";
import BasicRating from "./BasicRating";
import RatingDialog from "./RatingDialog";
import SubmitButton from "./SubmitButton";
import { useParams } from "react-router-dom";


export default function TaskOfDay(props) {
const completion = props.completion
  const { id } = useParams();

  const [task, setTask] = useState([]);

  useEffect(() => {
    const URL = `/api/employees/3/tasks/${id}`
    try {
      axios.get(URL)
        .then((response) => {
          setTask(response.data.task)
        })
    } catch (error) {

    }
  }, []);

  const taskToSubmit = task.map((taskOfDay) => {
    return (

      <div className="App">
        <h1>It is {taskOfDay.name}</h1>

        <h3> <BasicRating rating={taskOfDay.rating}/> </h3>
        <h2>{taskOfDay.description}</h2>

        <h2><Video url={taskOfDay.url} /></h2>
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

        {console.log(task)}
       

      </Box>
    </Box>

  );
}