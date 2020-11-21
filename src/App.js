import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component';
import HomePage from './pages/home/homepage.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

const TopicDetail = (props) => {
  return (
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  )
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log('user', user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('will unmount');
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/hats' component={HatsPage} />
          <Route exact path='/contact' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route exact path='/topics/:topicId' component={TopicDetail} />
        </Switch>
      </div >
    );
  }
}

export default App;
