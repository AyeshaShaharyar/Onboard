import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import AdminSidebar from "./AdminSidebar"
import EmployeeList from "./EmployeeList";
import "../styles.css"

import { Box, Button, CssBaseline, Grid, TextField, Typography, Divider } from "@mui/material";

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

    const form_data = { ...inputs };

    //  form_data.append();
    console.log("data as spread inputs", form_data);
    try {
      axios
        .post("/api/admin/new-tasks", form_data)
        .then(function (response) {
         
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
              <AdminSidebar />
              <Box component="main" sx={{ flexGrow: 2, bgcolor: 'background.default', p: 3 }}>

                <Divider variant='middle' textAlign="left" sx={{p:3}}><Typography variant="h4">Admin - Create a New Task</Typography></Divider>
                <Grid container spacing={3} >
                  {/* <Grid container item justifyContent="center" spacing={4} xs={24} > */}
                      {/* <Grid container item > */}
                    <Grid container item >
                      <TextField
                        fullWidth
                        required
                        label="Task Day"
                        variant="outlined"
                        name="taskday"
                        value={inputs.taskday || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    {/* <Grid item xs={6} >
                      <TextField
                        fullWidth
                        required
                        label="Due Date"
                        variant="outlined"
                        name="duedate"
                        value={inputs.duedate || ""}
                        onChange={handleChange}
                      />
                    </Grid> */}
                  {/* </Grid> */}
                  <Grid container item >
                    <TextField
                      fullWidth
                      required
                      label="Name"
                      variant="outlined"
                      name="taskname"
                      value={inputs.taskname || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid container item >
                    <TextField
                      fullWidth
                      required
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={10}
                      name="description"
                      value={inputs.description || ""}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid container item >
                    <TextField
                      fullWidth
                      label="Image URL"
                      variant="outlined"
                      name="img"
                      value={inputs.img || ""}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid container item >
                    <TextField
                      fullWidth
                      label="Video Link"
                      variant="outlined"
                      name="video"
                      value={inputs.video || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid container item>
                    <TextField fullWidth
                      label="Additional Content"
                      variant="outlined"

                      name="link"
                      value={inputs.link || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid container item >
                    <TextField
                      fullWidth
                      label="Zoom Link"
                      variant="outlined"
                      name="zoom"
                      value={inputs.zoom || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid container item xs={6}>
                    <EmployeeList
                      name="employee"
                      value={inputs.employee || ""}
                      onChange={handleChange}
                      setInputs={setInputs}
                    />
                  </Grid>

                  <Grid item >

                    <Button variant="contained" color="info" type="submit" onClick={handleSubmit} >
                      Assign Task
                    </Button>

                  </Grid>
                </Grid>

              </Box>
            </Box>
          </>
          );
}
