import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
// import logo from "./logo.png";
import onboard from "./onboard.png"



const drawerWidth = 240;

export default function Sidebar() {
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
    <Toolbar/> 
    
    <img src={onboard} alt="Onboard" />
    <Divider />
    <List>
      <ListItem button key={'Dashboard'}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Dashboard'} />
        </Link>
      </ListItem>
      
      <ListItem button key={'Tasks'}>
        <Link to="/tasks" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Tasks'} />
        </Link>
      </ListItem>
          
      <ListItem button key={'About'}>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'About'} />
        </Link>
      </ListItem>
               
    </List>

    <Divider />
    <List>
      <ListItem button key={'Settings'}>
        <Link to="/settings" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Settings'} />
        </Link>
      </ListItem>
    
      <ListItem button key={'Logout'}>
        <Link to="/logout" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Logout'} />
        </Link>
      </ListItem>

    </List>
    </Drawer>      
  );
}
