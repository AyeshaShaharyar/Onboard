import React from "react";
import ResponsiveDrawer from "./AdminPageStyle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EmployeeList from "./EmployeeList";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";


export default function TaskForm() {
  const [inputs, setInputs] = useState({});
 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    const form_data = {...inputs};
    
    //  form_data.append();
    console.log("data as spread inputs", form_data);
    try {
      axios
      .post("/api/admin/new-tasks", form_data )
      .then(function (response) {
        console.log("navigate")
        navigate("/admin/tasks", { replace: true });
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <ResponsiveDrawer />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 15 }}
        >
          <Grid container direction={"column"} spacing={5}>
            <Grid item xs={4}>
              <TextField
                label="Task Day"
                variant="outlined"
                name="taskday"
                value={inputs.taskday || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Name"
                variant="outlined"
                name="taskname"
                value={inputs.taskname || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                style={{ width: "70%" }}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={10}
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Image URL"
                variant="outlined"
                name="img"
                value={inputs.img || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Due Date"
                variant="outlined"
                name="duedate"
                value={inputs.duedate || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Video Link"
                variant="outlined"
                name="video"
                value={inputs.video || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Additional Content" variant="outlined" 
                name="link"
                value={inputs.link || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Zoom" variant="outlined" 
                name="zoom"
                value={inputs.zoom || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
            <EmployeeList 
              name="employee"
              value={inputs.employee || ""}
              onChange={handleChange}
              setInputs= {setInputs}
            />
            </Grid>

            <Grid item xs={4}>
            
              <Button type="submit" onClick={handleSubmit} variant="contained">
                Upload Task
              </Button>
           
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
