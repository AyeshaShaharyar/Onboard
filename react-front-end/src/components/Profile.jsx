import React from "react";

import Sidebar from "./Sidebar"

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function Profile(){
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
           
        <h1>It is Profile</h1>
       
      </Box>
    </Box>
  )
}