import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "../Sidebar";
import Video from "./Video";
import BasicRating from "./BasicRating";
import RatingDialog from "./RatingDialog";

import { Box, Divider, Typography, CssBaseline } from "@mui/material";

const textarea = {
  width: '100%',
  padding: "12px 20px",
  border: "none",
  fontFamily: "Times New Roman, Times, serif",
  fontSize: "20px",
  resize: " none",
  whiteSpace: "pre-line"
}

export default function TaskOfDay(props) {
  const completion = props.completion
  const { id } = useParams();

  const [task, setTask] = useState([]);

  useEffect(() => {
    const URL = `/api/employees/3/tasks/${id}`;
    try {
      axios.get(URL).then((response) => {
        console.log(response.data);
        setTask(response.data.task);
      });
    } catch (error) { }
  }, []);

  const taskToSubmit = task.map((taskOfDay, index) => {
    return (

      <div key={index} className="App">
        <Divider textAlign="left"><Typography variant="h4">Task - {taskOfDay.name} </Typography> </Divider>

        <div><h2>{taskOfDay.description}</h2>
          <BasicRating rating={taskOfDay.rating} />
        </div>

        <div className="image">
          {taskOfDay.image ? <img width="60%" height="40%" src={taskOfDay.image} alt="img" /> : null}
        </div>

        {taskOfDay.content ? <div style={textarea}>{taskOfDay.content}</div> :
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
