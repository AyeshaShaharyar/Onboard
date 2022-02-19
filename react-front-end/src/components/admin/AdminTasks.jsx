import React from "react";
import ResponsiveDrawer from "./AdminPageStyle";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Tasks from "./Tasks";

export default function AdminTasks() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ResponsiveDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 10 }}
      >
        <Tasks/>
        <Link to="/admin/new-task" style={{ textDecoration: "none" }}>
        <Button variant="contained">Add Task</Button>
        </Link>
        
      </Box>
    </Box>
  );
}
