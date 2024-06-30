import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { logo, lo } from '../assets';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import EscalatorWarningRoundedIcon from '@mui/icons-material/EscalatorWarningRounded';
import ChildFriendlyRoundedIcon from '@mui/icons-material/ChildFriendlyRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChildCareRoundedIcon from '@mui/icons-material/ChildCareRounded';
import Face4Icon from '@mui/icons-material/Face4';
import Dashboard from './Dashboard';
import AdminManagement from './AdminManagement';
import ParentsManagement from './ParentsManagement';
import AttendantsManagement from './AttendantsManagement';
import ChildManagement from './ChildManagement';
import Profile from './Profile';
import Chat from './Chat';
import Feedback from './Feedback';
import { Tooltip, Menu, MenuItem, Badge } from '@mui/material';


const drawerWidth = 270;

const items = [
  { text: 'Dashboard', icon: <DashboardRoundedIcon />, path: '/' },
  { text: 'Admin Management', icon: <ChildFriendlyRoundedIcon />, path: '/adminManagement' },
  { text: 'Attendants Management', icon: <Face4Icon />, path: '/attendantsManagement' },
  { text: 'Child Management', icon: <ChildCareRoundedIcon />, path: '/ChildManagement' },
  { text: 'Parent Management', icon: <EscalatorWarningRoundedIcon />, path: '/parentsManagement' }
];

const items2 = [
  { text: 'Chat', icon: <ChatBubbleRoundedIcon />, path: '/chat' },
  { text: 'Feedback', icon: <RateReviewRoundedIcon />, path: '/feedback' },
  { text: 'Profile', icon: <AccountCircleRoundedIcon />, path: '/profile' },
  { text: 'Logout', icon: <LogoutRoundedIcon link={Feedback} />, path: '/logout' },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationCount, setNotificationCount] = useState(5); // Example notification count

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img style={{ width: '25%', height: '25%' }} src={lo} alt="Logo" />
        <img src={logo} alt="Logo" />
      </Toolbar>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {items2.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "#6A41AE"
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Tooltip title="Menu">
                <MenuIcon />
              </Tooltip>
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Tiny Toes Management
            </Typography>

            <Box sx={{ ml: 'auto', color: 'white' }}>
              <Tooltip title="Notifications">
                <Tooltip title="Notifications">
                  <IconButton component={Link} to="/chat">
                    <Badge badgeContent={notificationCount} color="error">
                      <NotificationsOutlinedIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Tooltip>
              <Tooltip title="Settings">
                <IconButton component={Link} to="/profile">
                  <SettingsOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Profile">
                <IconButton onClick={handleMenuClick}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem component={Link} to="/logout" onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/adminManagement" element={<AdminManagement />} />
            <Route path="/attendantsManagement" element={<AttendantsManagement />} />
            <Route path="/childManagement" element={<ChildManagement />} />
            <Route path="/parentsManagement" element={<ParentsManagement />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;