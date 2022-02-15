import React from "react";
import axios from "axios";
import "../App.css";
import Button from "@mui/material/Button";
import FolderList from "./List";
import Grid from '@mui/material/Grid';




const Home = function(){

    return (
      
      <div className="App">
       
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={4}>
          <FolderList />
          </Grid>
          <Grid item xs={4}>
          
          </Grid>
        </Grid>
      
      </div>
    );
}

export default Home;
