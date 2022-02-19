// material
import React from "react";
import { Box, Grid, Container, Typography, Divider } from "@mui/material";

// components
import AppProgressBar from "../components/_dashboard/app/AppProgressBar";
import AppDateToday from "../components/_dashboard/app/AppDate";
import Sidebar from "./Sidebar";
import CssBaseline from "@mui/material/CssBaseline";

import { AppTasks } from "../components/_dashboard/app";

export default function Dashboard(props) {
  
  const employeeName = props.employeeName;
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Container maxWidth="xl">
          <Sidebar />
          <Box sx={{ pb: 5 }}>
          <Divider textAlign="left"><Typography variant="h4">Hi, {employeeName}! Welcome Onboard!</Typography></Divider>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <AppDateToday />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <AppProgressBar />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <AppTasks />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid> */}

            {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid> */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
