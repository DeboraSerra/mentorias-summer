import { FETCH_PRODS, SAVE_PRODS } from '../actions/products';

const initialSt = {
  products: [],
  loading: false,
}

const productsReducer = (state = initialSt, { type, payload }) => {
  switch (type) {
    case FETCH_PRODS:
      return {
        ...state,
        loading: true,
      };
    case SAVE_PRODS:
      return {
        ...state,
        loading: false,
        products: payload
      };
    default: return state;
  }
}

export default productsReducer;
