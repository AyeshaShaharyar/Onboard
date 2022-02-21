import React, { useState, useEffect, useRef } from "react";
import { Box, Button, CssBaseline} from "@mui/material";
import axios from "axios";
import TasksTable from "./TasksTable";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";


export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const inputEl = useRef(null);

  const handleBtns = function (e) {
    let URL = "/api/admin/tasks";
    if (e.target.value === "completed") {
      URL = `/api/admin/tasks?completion=true`;
    } else if (e.target.value === "pending") {
      URL = `/api/admin/tasks?completion=false`;
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
    const URL = "/api/admin/tasks";
    try {
      axios.get(URL).then((response) => {
        console.log(response.data);
        setTasks(response.data.employeesTasks);
      });
    } catch (error) {}
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
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
