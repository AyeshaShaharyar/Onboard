import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Box, Typography, Button, CssBaseline, Divider } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";

import Sidebar from "../Sidebar";
import TasksTable from "./TasksTable";
import "../styles.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const inputEl = useRef(null);

  const handleBtns = function (e) {
    let URL = "/api/employees/3/tasks";
    if (e.target.value === "completed") {
      URL = `/api/employees/3/tasks?completion=true`;
    } else if (e.target.value === "pending") {
      URL = `/api/employees/3/tasks?completion=false`;
    }
    getTasks(URL);
  };

  const getTasks = function (url) {
    try {
      axios.get(url).then((response) => {
        console.log(response.data);
        setTasks(response.data.employeesTasks);
      });
    } catch (error) {}
  };

  useEffect(() => {
    let URL = "/api/employees/3/tasks";
    getTasks(URL);
    if (inputEl) {
      inputEl.current.focus();
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Divider variant="middle" textAlign="left">
          <Typography variant="h4">Tasks</Typography>
        </Divider>

        <div selected className="Button">
          <Button
            ref={inputEl}
            autoFocus
            disableRipple
            variant="outlined"
            value={"all"}
            onClick={handleBtns}
          >
            <AssignmentIcon fontSize="small" />
            View All
          </Button>
          <Button
            disableRipple
            variant="outlined"
            value={"completed"}
            onClick={handleBtns}
          >
            <AssignmentTurnedInIcon fontSize="small" />
            Completed
          </Button>
          <Button
            disableRipple
            variant="outlined"
            value={"pending"}
            onClick={handleBtns}
          >
            <AssignmentLateIcon fontSize="small" />
            Pending
          </Button>
        </div>

        <TasksTable tasks={tasks} />
      </Box>
    </Box>
  );
}
