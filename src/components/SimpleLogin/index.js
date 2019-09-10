import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase'

const  SimpleLogin = props =>{
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const doSignOut = () => {
    props.firebase.doSignOut()
    props.history.push(ROUTES.HOME)
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
        <MenuItem onClick={handleClose}>
          <NavLink className="routes" exact to={ROUTES.SIGN_UP}>Sign Up / Register</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink className="routes" exact to={ROUTES.SIGN_IN}>Sign In</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p className="routes" onClick={doSignOut}>Sign Out</p>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withRouter(withFirebase(SimpleLogin))