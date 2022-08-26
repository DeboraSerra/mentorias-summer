import { ADD_CART, REMOVE_CART, INCREASE, DECREASE } from '../actions/cart';

const initialSt = {
  cart: [],
}

const cartReducer = (state = initialSt, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      let cart;
      if (state.cart.some(({ id }) => id === payload.id)) {
        cart = state.cart.map((product) => {
          if (product.id === payload.id) {
            return { ...product, qnt: product.qnt + 1 }
          } return product;
        })
      } else {
        cart = [...state.cart, payload]
      }
      return {
        ...state,
        cart,
      };
    case REMOVE_CART:
      const newCart = state.cart.filter((product) => product.id !== payload.id);
      return {
        ...state,
        cart: newCart,
      };
    case INCREASE:
      const increaseCart = state.cart.map((product) => {
        if (product.id === payload.item.id) {
          const newQnt = product.qnt + payload.qnt < payload.item.available_quantity
            ? product.qnt + payload.qnt
            : payload.item.available_quantity;
          return { ...product, qnt: newQnt };
        } return product;
      });
      return {
        ...state,
        cart: increaseCart,
      };
    case DECREASE:
      const decreaseCart = state.cart.map((product) => {
        if (product.id === payload.item.id) {
          return { ...product, qnt: product.qnt - payload.qnt };
        } return product;
      });
      return {
        ...state,
        cart: decreaseCart,
      };
    default: return state;
  }
}

export default cartReducer;
