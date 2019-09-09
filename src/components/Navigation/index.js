import React from 'react'
import SimpleMenu from '../SimpleMenu'
import SimpleLogin from '../SimpleLogin'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link:{
        textDecoration: "none",
        color: "white"
    }
  }));
  
  export default function Navigation() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
              <SimpleMenu />
            <Typography variant="h6" className={classes.title}>
                <NavLink className={classes.link} exact to={ROUTES.HOME}>Money Talks in Politics</NavLink>
            </Typography>
                <SimpleLogin />
          </Toolbar>
        </AppBar>
      </div>
    );
  }




