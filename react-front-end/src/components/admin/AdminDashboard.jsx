import React from "react";
import ResponsiveDrawer from "./AdminPageStyle";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

export default function AdminDashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ResponsiveDrawer />
      <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 40 }}
        >
      <h1>Welcome!</h1>
      </Box>
    </Box>
  );
}
