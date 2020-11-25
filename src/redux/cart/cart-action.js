import { cartActionTypes } from './cart-action-type';

const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN
  }
}

export default toggleCartHidden;