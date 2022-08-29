export const FETCH_PRODS = 'FETCH_PRODS';
export const SAVE_PRODS = 'SAVE_PRODS';

const fetchAction = { type: FETCH_PRODS };

const saveProds = (prods) => ({
  type: SAVE_PRODS,
  payload: prods,
});

const fetchProducts = (categoryId, query) => async (dispatch) => {
  dispatch(fetchAction);
  const catId = categoryId ? `category=${categoryId}` : '';
  const que = query ? `q=${query}` : '';
  const url = `https://api.mercadolibre.com/sites/MLB/search?${catId}${catId && que ? '&' : ''}${que}`;
  const response = await fetch(url);
  const products = await response.json();
  return dispatch(saveProds(products.results));
}

export default fetchProducts;
