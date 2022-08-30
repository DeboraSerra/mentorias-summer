import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import productReducer from './products';
import detailsReducer from './details';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  details: detailsReducer,
})

export default rootReducer;
