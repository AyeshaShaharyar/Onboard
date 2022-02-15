import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./Sidebar";
import Video from "./Video"


export default function About () {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        
        <h1>It is About</h1>
        
        <Video/>
        

        
      </Box>
    </Box>
 
  )
}

