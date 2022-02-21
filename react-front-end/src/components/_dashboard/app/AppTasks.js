import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardHeader } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";

export default function InteractiveList(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const URL = "/api/employees/3/tasks";
    try {
      axios.get(URL).then((response) => {
        setTasks(response.data.employeesTasks);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const taskList = tasks.map((task) => {
    return (
      <ListItem key={task.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={task.description} />
      </ListItem>
    );
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
    >
      <Card>
        <CardHeader title="Upcoming Tasks" />
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12} md={12} lg={12}>
            <List>{taskList}</List>
          </Grid>
        </Box>
      </Card>
    </Grid>
  );
}
