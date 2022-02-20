import React from "react";
import { Link, useLocation } from "react-router-dom";

import onboard from "../onboard.png";
import '../styles.css'

import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const drawerWidth = 240;

const routes = {
  Tasks: "/admin/tasks",
  Create: "/admin/new-task"
};

export default function AdminSidebar() {
  const { pathname } = useLocation();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img className={'logo'} src={onboard} alt="Onboard" />
      <Divider />

      <List>
        <ListItem selected={'/admin/tasks' === pathname} button key={'Tasks'}>
          <TaskAltIcon fontSize="small" sx={{ color: '#880e4f' }} />
          <Link to="/admin/tasks" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{ color: '#37474f' }} primary={'Tasks'} />
          </Link>
        </ListItem>

        <ListItem selected={'/admin/new-task' === pathname} button key={'Create'}>
          <AddCircleOutlineIcon fontSize="small" sx={{ color: '#880e4f' }} />
          <Link to="/admin/new-task" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{ color: '#37474f' }} primary={'Create'} />
          </Link>
        </ListItem>
      </List>

      <Divider orientation='vertical' sx={{ height: '45%' }} />

      <List>
        <ListItem  button key={'Logout'}>
          <ExitToAppIcon fontSize="small" sx={{ color: '#880e4f' }} />
          {/* <Link to="/logout" style={{ textDecoration: 'none' }}> */}
          <ListItemText sx={{ color: '#37474f' }} primary={'Logout'} />
          {/* </Link> */}
        </ListItem>
      </List>

    </Drawer>
  );
}