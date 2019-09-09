import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import * as ROUTES from '../../constants/routes'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton color="inherit" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink className="routes" exact to={ROUTES.SEARCH_CONTRIBUTIONS}>Contributions By Candidate</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink className="routes" exact to={ROUTES.SEARCH_DISBURSEMENTS}>Disbursements By Candidate</NavLink></MenuItem>
      </Menu>
    </div>
  );
}