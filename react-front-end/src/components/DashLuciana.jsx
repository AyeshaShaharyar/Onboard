import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./Sidebar"

const Dashboard = function () {
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        
        
        
        
        <h1>It is Dashboard</h1>
      
      
      
      
      </Box>
    </Box>
  )
}

export default Dashboard;