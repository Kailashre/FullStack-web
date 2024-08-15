import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Edit Profile
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
