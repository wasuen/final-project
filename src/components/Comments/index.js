import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withFirebase } from '../Firebase'


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

const TextFields = (props) => {
  const classes = useStyles();
  const [comments, setComments] = React.useState([])
  const [values, setValues] = React.useState({
    comment:''
  });

  const handleChange = comment => event => {
    setValues({ ...values, [comment]: event.target.value });
  };

  useEffect(() => {
    //   props.firebase.db.collection('comments')
    //     .where('candidate', '==', props.candidate)
    //     .get()
    //     .then(snapShot => {
    //         setComments(snapShot.docs.map(d => d.data()))
    //     })
        props.firebase.db.collection("comments").where('candidate', '==', props.candidate)
            .onSnapshot((snapShot) => {
                setComments(snapShot.docs.map(d => d.data()))
            });
  }, [setComments])

  const onSubmit = event => {
    event.preventDefault()
    // const { comment, user, component, candidate } = this.state
    props.firebase.db.collection('comments').doc().set({
        comment: values.comment,
        user: props.authUser.username,
        component: props.component,
        candidate: props.candidate

    })
      .catch(error => {
        this.setState({error})
      })
  }

  console.log(props)

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
        <Button onClick={onSubmit} className='comment-submit-button' type='submit' variant="outlined">
            Submit
        </Button>
        <br/>
        <div>
            <h3 className='search-form'>User Comments</h3>
            {
                comments.map((c,i) => 
                    <div key={i}>
                        <div>{c.user}: {c.comment}</div>
                    </div>
                )
            }
        </div>
      </div>
  );
}


export default withFirebase(TextFields)