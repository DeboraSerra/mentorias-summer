import { FETCH_CAT, SAVE_CAT } from '../actions/categories';

const initialSt = {
  categories: [],
  loading: false,
}

const categoriesReducer = (state = initialSt, action) => {
  switch (action.type) {
  case FETCH_CAT:
    return {
      ...state,
      loading: true,
    }
  case SAVE_CAT:
    return {
      ...state,
      categories: action.payload,
      loading: false,
    }
  default: return state;
  }
}

export default categoriesReducer;
