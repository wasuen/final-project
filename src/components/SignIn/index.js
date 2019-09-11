import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const SignIn = () => (
  <div>
    <h3 className='signup'>SignIn</h3>
    <SignInForm />
    <SignUpLink />
  </div>
)

class SignInFormBase extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  onSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => 
        this.props.history.push(ROUTES.HOME)
      )
      .catch(error => {
        this.setState({error})
      })
  }

  onChange = event => 
    this.setState({ [event.target.name] : event.target.value})

  render() {
    const { email, password, error } = this.state
    console.log(this.props)
    return (
      <form className='signup' onSubmit={this.onSubmit}>
        <TextField
          label='Email'
          name='email'
          type='text'
          value={email}
          onChange={this.onChange}
          placeholder='Email Address'
          margin="normal"
          variant="outlined"
          style={{margin: "0"}}
        />
        <br/>
        <TextField 
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={this.onChange}
          placeholder='Password'
          placeholder='Password'
          margin="normal"
          variant="outlined"
          style={{margin: "0"}}
        />
        <br/>
        <Button type='submit' variant="outlined">Sign In</Button>
        {error && error.message}
      </form>
    )
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase))

const SignUpLink = () => (
  <p className='signup'>
    Don't have an account? 
    <Button variant="outlined"><NavLink className="signin-link" exact to={ROUTES.SIGN_UP}>Sign Up</NavLink></Button>
  </p>
)

export default SignIn