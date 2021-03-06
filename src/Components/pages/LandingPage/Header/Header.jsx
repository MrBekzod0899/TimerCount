import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import avatar from '../../../assets/avatar.jpg'
import ModalSettings from '../TimerCount/ModalSettings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import styles from './header.module.css'


const Header = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [login, setlogin] = React.useState(false);
  
  return (
    <AppBar position="relative">
      <Container maxWidth="sm" className={`p-3 ${styles.header}`}>
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
            className={styles.logoName}
          >
            Online Timer
          </Typography>
          <Box className={styles.boxGroup}>
            <button className='btn btn-secondary p-1'>
              <AssessmentIcon /> <span>Report</span>
            </button>
            <button onClick={props.handleOpen} className='btn btn-secondary m-2 p-1'>
              <SettingsIcon /> <span>Settings</span>
            </button>
            <ModalSettings handleOpen={props.handleOpen} handleClose={props.handleClose} open={props.open} handleSubmit={props.handleSubmit} />
          </Box>
          <Box sx={{ flexGrow: 0 }} className={styles.loginButton}>
            {
              !login ?  <Link to="/signin"  className='btn btn-secondary text-light'><span>login</span><ArrowForwardIcon /></Link>
                :
                <Tooltip title="Open Settings">
                  <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }} className="p-1">
                    <Avatar alt="User" className='img-fluid  ml-2' src={avatar} />
                  </IconButton>
                </Tooltip>
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center"><PersonIcon /><span>Profile</span></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center"><RocketLaunchIcon /><span>Subscription</span> </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center"><LogoutIcon /> <span>Logout</span></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center"><DeleteIcon /><span>Delete Account</span></Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;