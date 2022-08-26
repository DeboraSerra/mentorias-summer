import { FETCH_DETS, SAVE_DETS } from '../actions/details';

const initialSt = {
  details: {},
  loading: true,
}

const detailsReducer = (state = initialSt, { payload, type }) => {
  switch (type) {
    case FETCH_DETS:
      return {
        ...state,
        loading: true,
      };
    case SAVE_DETS:
      return {
        ...state,
        loading: false,
        details: payload,
      };
    default: return state;
  }
}

export default detailsReducer;
