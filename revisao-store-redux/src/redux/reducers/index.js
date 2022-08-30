import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import productReducer from './products';
import detailsReducer from './details';
import cartReducer from './cart';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  details: detailsReducer,
  cart: cartReducer,
})

export default rootReducer;
