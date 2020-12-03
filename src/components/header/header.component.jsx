import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
const Header = (props) => {
  console.log('render in header');
  return (<div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'> Shop</Link>
      <Link className='option' to='/contact'> Contact </Link>
      {
        props.currentUser ? <div className='option' onClick={() => { auth.signOut() }}>Sign Out</div> : <Link className='option' to='/signin'> Sign In </Link>
      }
      <CartIcon />
    </div>
    {
      props.hidden ? null : <CartDropdown />
    }
  </div>)
}

const mapStateToProps = state => {
  console.log('map state to props in header');
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
  }
}
export default connect(mapStateToProps)(Header);