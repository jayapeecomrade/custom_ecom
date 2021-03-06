import React from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';
import './sign-up.styles.scss';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords doesnot match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type='text' value={displayName} name='displayName' label='Display Name' required onChange={this.handleChange}></FormInput>
          <FormInput type='email' value={email} name='email' label='Email' required onChange={this.handleChange}></FormInput>
          <FormInput type='password' value={password} name='password' label='Password' required onChange={this.handleChange}></FormInput>
          <FormInput type='password' value={confirmPassword} name='confirmPassword' label='Confirm Password' required onChange={this.handleChange}></FormInput>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }

}