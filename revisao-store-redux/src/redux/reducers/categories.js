import { FETCH_CAT, SAVE_CAT } from '../actions/categories';

const initialSt = {
  categories: [],
  loading: false,
};

const catReducer = (state = initialSt, action) => {
  switch(action.type) {
  case FETCH_CAT:
    return {
      ...state,
      loading: true,
    }
  case SAVE_CAT:
    return {
      ...state,
      loading: false,
      categories: action.payload,
    }
  default: return state;
  }
}

export default catReducer;
