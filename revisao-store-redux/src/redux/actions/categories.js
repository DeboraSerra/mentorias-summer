export const FETCH_CAT = 'FATCH_CAT';
export const SAVE_CAT = 'SAVE_CAT';

const fetchCategoriesAction = { type: FETCH_CAT };

const saveCategories = (categories) => ({
  type: SAVE_CAT,
  payload: categories,
})

const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesAction);
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return dispatch(saveCategories(categories));
}

export default fetchCategories;
