import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./Sidebar"
// import "./styles.css";
// import YoutubeEmbed from "./videoYoutube";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};



export default function About () {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <div className="App">
          <h1>VIDEO</h1>
          <YoutubeEmbed embedId="2p9sIugbIwo" />
        </div>
    </Box>
    </Box>
 
  )
}

