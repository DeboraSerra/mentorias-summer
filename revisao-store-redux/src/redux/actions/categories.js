export const FETCH_CAT = 'FeTCH_CAT';
export const SAVE_CAT = 'SAVE_CAT';

const fetchCatAction = { type: FETCH_CAT };

const saveCategories = (cat) => ({
  type: SAVE_CAT,
  payload: cat,
});

const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCatAction);
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return dispatch(saveCategories(categories));
}

export default fetchCategories;
