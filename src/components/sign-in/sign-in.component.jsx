import React from 'react';
import './sign-in.styles.scss';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { SignInWithGoogle } from './../../firebase/firebase.utils';

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (<div className="sign-in">
      <h2>I allready have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput name="email" label='Email' type="email" value={this.state.email} required handleChange={this.handleChange} />
        <FormInput name="password" label='Password' type="password" value={this.state.password} required handleChange={this.handleChange} />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="submit" onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
        </div>
      </form>

    </div>)
  }
}