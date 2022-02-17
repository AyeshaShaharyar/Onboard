import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import ContactPageTwoToneIcon from '@mui/icons-material/ContactPageTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Link } from "react-router-dom";


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
    <Toolbar /> ONBOARD
    <Divider />
    <List>
   
      <ListItem button key={'Dashboard'}>
      <DashboardCustomizeTwoToneIcon/>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Dashboard'} />
        </Link>
      </ListItem>
      
      <ListItem button key={'Tasks'}>
      <AssignmentTwoToneIcon />
        <Link to="/tasks" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Tasks'} />
        </Link>
      </ListItem>
          
      <ListItem button key={'About'}>
      <ContactPageTwoToneIcon/>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'About'} />
        </Link>
      </ListItem>
               
    </List>

    <Divider />
    <List>
      <ListItem button key={'Settings'}>
      <SettingsApplicationsTwoToneIcon/>
        <Link to="/settings" style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Settings'} />
        </Link>
      </ListItem>
    
      <ListItem button key={'Logout'}>
      <LogoutTwoToneIcon/>
        <Link to="/logout"  style={{ textDecoration: 'none' }}>
          <ListItemText primary={'Logout'} />
        </Link>
      </ListItem>

    </List>
    </Drawer>      
  );
}
