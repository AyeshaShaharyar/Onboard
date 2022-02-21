import React, { useState, useEffect } from "react";
import axios from "axios";

import { Box, Typography, CssBaseline, Divider } from "@mui/material";

import AdminSidebar from "./AdminSidebar";
import Video from "./Video";

import { useParams } from "react-router-dom";

const textarea = {
  width: "100%",
  whiteSpace: "pre-line",
  padding: "12px 20px",
  border: "none",
  fontFamily: "Times New Roman, Times, serif",
  fontSize: "20px",
  resize: " none",
};

export default function AdminTaskOfDay(props) {
  const completion = props.completion;
  const { id } = useParams();

  const [task, setTask] = useState([]);
  // admin/task/${task.id}---employee name, id

  useEffect(() => {
    const URL = `/api/admin/3/tasks/${id}`;
    try {
      axios.get(URL).then((response) => {
        setTask(response.data.task);
        console.log("taskofday", response.data);
      });
    } catch (error) {}
  }, []);

  const taskToSubmit = task.map((taskOfDay, index) => {
    return (
      <div className="App" key={index}>
        <div>
          <h1>Task - {taskOfDay.name}</h1>
        </div>

        <div>
          <h2>{taskOfDay.description}</h2>
        </div>

        <div className="image">
          {taskOfDay.image ? (
            <img width="60%" height="40%" src={taskOfDay.image} alt="img" />
          ) : null}
        </div>

        <div>
          {taskOfDay.content ? (
            <div style={textarea}>{taskOfDay.content}</div>
          ) : null}
        </div>

        <div>
          {taskOfDay.link ? (
            <p>
              To know more about this topic follow the{" "}
              <a href={taskOfDay.link}> link</a>. Complete all the sections.
            </p>
          ) : null}
        </div>

        <div>{taskOfDay.url ? <Video url={taskOfDay.url} /> : null}</div>
        <div>{taskOfDay.zoom ? <div> Upcoming meeting. Add it to your <a href={taskOfDay.zoom}>calendar!</a>.</div> : null } </div>
      </div>
    );
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminSidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Divider variant="middle" textAlign="left">
          <Typography variant="h4">Admin - Tasks</Typography>
        </Divider>

        {taskToSubmit}
      </Box>
    </Box>
  );
}
