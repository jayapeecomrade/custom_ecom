import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component';
import HomePage from './pages/home/homepage.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

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

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }, () => {
            console.log(this.state, 'state');
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log('render in app');
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/hats' component={HatsPage} />
          <Route exact path='/contact' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route exact path='/topics/:topicId' component={TopicDetail} />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = state => {
  console.log('map state to props in app');
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
