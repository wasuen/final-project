import React, { Component } from 'react'

const SignUp = (props) => {
    return (
        <div>
            <h1>SignUp</h1>
            <SignUpForm setUserId = {props.setUserId}/>
        </div>
    )
}

class SignUpForm extends Component {
    state = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
      }
    
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        
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
            <form onSubmit={this.onSubmit}>
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email'
        />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button type='submit' disabled={isInvalid}>Sign Up</button>
        {error && error.message}
      </form>
        )
    }


}

export default SignUp