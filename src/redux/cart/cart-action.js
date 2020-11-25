import { cartActionTypes } from './cart-action-type';

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN
  }
}

export const addItem = items => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: items
  }
}
