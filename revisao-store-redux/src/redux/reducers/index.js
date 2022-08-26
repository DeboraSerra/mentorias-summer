import { combineReducers } from 'redux';
import catReducer from './categories';
import productsReducer from './products';
import detailsReducer from './details';
import cartReducer from './cart';

const rootReducer = combineReducers({
  categories: catReducer,
  products: productsReducer,
  details: detailsReducer,
  cart: cartReducer,
});

export default rootReducer;
