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
      width: 350,
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

export default function TextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    comment:'',
  });

  const handleChange = comment => event => {
    setValues({ ...values, [comment]: event.target.value });
  };

  return (

      <div className='comment-submit'>
          <h3 className='comments'>Comments</h3>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
            id="outlined-multiline-static"
            label="Comments"
            multiline
            rows="6"
            className={classes.textField}
            onChange={handleChange('comment')}
            margin="normal"
            variant="outlined"
        />
        </form>
        <br />
        <Button className='comment-submit-button' type='submit' variant="outlined">
            Submit
        </Button>
        <br/>
        <div>
            User Comments
        </div>
      </div>
  );
}
