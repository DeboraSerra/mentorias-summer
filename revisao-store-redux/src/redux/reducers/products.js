import { FETCH_PROD, SAVE_PROD } from '../actions/products';

const initial = {
  products: [],
  loading: false,
}

const productReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case FETCH_PROD:
    return {
      ...state,
      loading: true,
    }
  case SAVE_PROD:
    return {
      ...state,
      loading: false,
      products: payload,
    }
  default: return state;
  }
}

export default productReducer;
