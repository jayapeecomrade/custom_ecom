import React from 'react';
import { connect } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import CustomButton from './../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = (props) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        props.cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
      }

    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartIems
  }
}
export default connect(mapStateToProps)(CartDropdown);