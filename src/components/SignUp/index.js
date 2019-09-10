import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const SignUp = (props) => {
    return (
        <div className='signup-form'>
          <div>
            <h3 className='signup'>SignUp</h3>
            <SignUpForm setUserId = {props.setUserId}/>
          </div>
        </div>
    )
}

class SignUpFormBase extends Component {
    state = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
      }
      
      onSubmit = event => {
        const { username, email, passwordOne } = this.state
        event.preventDefault()
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          return this.props.firebase.db.collection('users').doc(authUser.user.uid).set({
            username,
            email
          })
        })
        .then(() =>  {
          this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
          this.setState({error})
        })
      }
      
      onChange = event => {
          this.setState({
              [event.target.name]: event.target.value
          })
      }

      render() {
   
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
          } = this.state
          
          const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''
      return(
        <form className='signup' onSubmit={this.onSubmit}>
          <TextField 
            label='Username'
            name='username'
            value={username}
            onChange={this.onChange}
            type='text'
            placeholder='Full Name'
            margin="normal"
            variant="outlined"
            style={{margin: "0"}}
          />
          <br />
          <TextField
            label='Email'
            name='email'
            value={email}
            onChange={this.onChange}
            type='text'
            placeholder='Email'
            margin="normal"
            variant="outlined"
            style={{margin: "0"}}
          />
          <br />
          <TextField 
            label='Password One'
            name='passwordOne'
            value={passwordOne}
            onChange={this.onChange}
            type='password'
            placeholder='Password'
            margin="normal"
            variant="outlined"
            style={{margin: "0"}}
          />
          <br />
          <TextField 
            label='Password Two'
            name='passwordTwo'
            value={passwordTwo}
            onChange={this.onChange}
            type='password'
            placeholder='Confirm Password'
            margin="normal"
            variant="outlined"
            style={{margin: "0"}}
          />
          <br />
          <Button type='submit' variant="outlined" disabled={isInvalid}>Sign Up</Button>
          {error && error.message}
        </form>
      )
    }


}

const SignUpForm = withRouter(withFirebase(SignUpFormBase))

export default SignUp
