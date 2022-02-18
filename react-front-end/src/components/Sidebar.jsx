import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import onboard from "./onboard.png";
import './styles.css'


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
      <img className={'logo'} src={onboard} alt="Onboard" />
      <Divider />
      <List>
        <ListItem button key={'Dashboard'}>
          <InboxIcon  fontSize="small" sx={{color: '#880e4f'}}/>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItemIcon>

              <ListItemText sx={{color: '#37474f'}} primary={'Dashboard'} />
            </ListItemIcon>
          </Link>
        </ListItem>

        <ListItem button key={'Tasks'}>
          <ListAltIcon fontSize="small" sx={{color: '#880e4f'}}/>
          <Link to="/tasks" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{color: '#37474f'}} primary={'Tasks'} />
          </Link>
        </ListItem>

        <ListItem button key={'About'}>
          <PermDeviceInformationIcon fontSize="small" sx={{color: '#880e4f'}}/>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{color: '#37474f'}} primary={'About'} />
          </Link>
        </ListItem>

      </List>
      
      <Divider />
      <List>
        <ListItem button key={'Profile'}>
        <AccountBoxIcon fontSize="small" sx={{color: '#880e4f'}}/>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
        <ListItemText sx={{color: '#37474f'}} primary={'Profile'} />
          </Link>
        </ListItem>

        <ListItem button key={'Logout'}>
          
          <ExitToAppIcon fontSize="small" sx={{color: '#880e4f'}}/>
          <Link to="/logout" style={{ textDecoration: 'none' }}>
            <ListItemText sx={{color: '#37474f'}} primary={'Logout'} />
          </Link>
        </ListItem>

      </List>
    </Drawer>
  );
}
