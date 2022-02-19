import React from "react";
import { Link, useLocation } from "react-router-dom";

import onboard from "./onboard.png";
import './styles.css'

import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';

const drawerWidth = 240;

const routes = {
  Dashboard: "/",
  Tasks: "/about",
  About: "/about",
  Profile: "/profile"
};

export default function Sidebar() {
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
        <ListItem sx={{ '&focus': { bgcolor: '#00102A' } }} selected={'/' === pathname} button key={'Dashboard'}>
          <InboxIcon fontSize="small" sx={{ color: '#880e4f' }} />
          <Link to="/" style={{ textDecoration: 'none' }} >
            <ListItemText sx={{ color: '#37474f', '&active': { color: '#ff5722' } }} primary={'Dashboard'} />
          </Link>
        </ListItem>

        <ListItem selected={'/tasks' === pathname} button key={'Tasks'}>
          <ListAltIcon fontSize="small" sx={{ color: '#880e4f' }} />
          <Link to="/tasks" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{ color: '#37474f' }} primary={'Tasks'} />
          </Link>
        </ListItem>

        <ListItem selected={'/about' === pathname} button key={'About'}>
          <PermDeviceInformationIcon fontSize="small" sx={{ color: '#880e4f' }} />
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{ color: '#37474f' }} primary={'About'} />
          </Link>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem selected={'/profile' === pathname} button key={'Profile'} >
          <AccountBoxIcon fontSize="small" sx={{ color: '#880e4f' }} />
          <Link to="/profile" style={{ textDecoration: 'none' }} >
            <ListItemText sx={{ color: '#37474f' }} primary={'Profile'} />
          </Link>
        </ListItem>

        <ListItem style={{ bottom: 0, position: 'absolute'}} button key={'Logout'}>
          <ExitToAppIcon fontSize="small" sx={{ color: '#880e4f' }} />
          <Link to="/logout" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{ color: '#37474f' }} primary={'Logout'} />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}