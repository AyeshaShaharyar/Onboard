import React from "react";
import AdminSidebar from './AdminSidebar';

import { Box, Typography, CssBaseline, Divider } from "@mui/material";

export default function AdminDashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminSidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
     
        <Divider variant='middle' textAlign="left"><Typography variant="h4">Admin</Typography></Divider>

        <h1>Welcome!</h1>

      </Box>
    </Box>
  );
}