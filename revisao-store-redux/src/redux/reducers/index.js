import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import productReducer from './products';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
})

export default rootReducer;
