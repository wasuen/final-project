import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    comment:'',
  });

  const handleChange = comment => event => {
    setValues({ ...values, [comment]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-static"
        label="Comments"
        multiline
        rows="4"
        className={classes.textField}
        onChange={handleChange('comment')}
        margin="normal"
        variant="outlined"
      />
      <Button className='comment-submit' type='submit' variant="outlined">
        Submit
      </Button>
    </form>
  );
}


