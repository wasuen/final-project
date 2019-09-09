import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes'

export default function SimpleLogin() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button color="inherit" onClick={handleClick}>
        Login/Register
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink className="routes" exact to={ROUTES.SIGN_UP}>Sign Up / Register</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink className="routes" exact to={ROUTES.SIGN_IN}>Sign In</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink className="routes" exact to={ROUTES.SIGN_OUT}>Sign Out</NavLink></MenuItem>
      </Menu>
    </div>
  );
}