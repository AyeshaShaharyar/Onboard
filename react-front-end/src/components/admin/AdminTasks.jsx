import React from "react";
import { Link } from "react-router-dom";

import AdminSidebar from "./AdminSidebar"
import Tasks from "./Tasks";

import { Box, Typography, Button, CssBaseline, Divider } from "@mui/material";

export default function AdminTasks() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminSidebar />

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Divider variant='middle' textAlign="left"><Typography variant="h4">Admin - Tasks</Typography></Divider>

        <Tasks />

      </Box>
    </Box>
  );
}
