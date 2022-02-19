import React from "react";

import Sidebar from "./Sidebar"
import Video from "./tasks/Video"

import { Box, Typography, Button, CssBaseline, Divider } from "@mui/material";

export default function About () {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <div className="App">
        <Divider variant='middle' textAlign="left"><Typography variant="h4">About</Typography></Divider>
          <div>bla bla bla</div>
          <Video url={'https://www.youtube.com/embed/2p9sIugbIwo'}/>
        </div>
    </Box>
    </Box>
 
  )
}

