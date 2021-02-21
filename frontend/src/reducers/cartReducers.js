import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const itemExist = state.cartItems.find((x) => x.product === item.product)  //Find ID in current array to check if it exists.

      // If item exists in cart, add to quantity. If it doesnt exist in cart, add it to cart.
      if (itemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => x.product === itemExist.product ? item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload)
      };


    default:
      return state;
  }
};