export const ADD_CART = 'ADD_CART';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const REMOVE_CART = 'REMOVE_CART';

export const addToCart = (item) => ({
  type: ADD_CART,
  payload: item,
})

export const removeFromCart = (item) => ({
  type: REMOVE_CART,
  payload: item,
})

export const increaseQnt = (item, qnt) => ({
  type: INCREASE,
  payload: {
    item,
    qnt,
  }
})

export const decreaseQnt = (item, qnt) => ({
  type: DECREASE,
  payload: {
    item,
    qnt,
  }
})
