import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Button from "@mui/material/Button";
import FolderList from "./List";
import Grid from '@mui/material/Grid';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
    };
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  render() {
    return (
      
      <div className="App">
        <h1>{this.state.message}</h1>
        <Button onClick={this.fetchData} variant="contained">
          Fetch Data
        </Button>
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
}

export default Home;
