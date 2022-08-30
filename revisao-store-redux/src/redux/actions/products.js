export const FETCH_PROD = 'FETCH_PROD';
export const SAVE_PROD = 'SAVE_PROD';

const fetchProductsAction = { type: FETCH_PROD };

const saveProducts = (products) => ({
  type: SAVE_PROD,
  payload: products,
});

const fetchProducts = (categoryId, query) => async (dispatch) => {
  dispatch(fetchProductsAction);
  const category = categoryId ? `category=${categoryId}` : '';
  const q = query ? `q=${query}` : '';
  const url = `https://api.mercadolibre.com/sites/MLB/search?${category}${category && q ? '&' : ''}${q}`;
  const response = await fetch(url);
  const products = await response.json();
  return dispatch(saveProducts(products));
}

// 'https://api.mercadolibre.com/sites/MLB/search?category=xablau&q=xablau'
// 'https://api.mercadolibre.com/sites/MLB/search?q=xablau'
// 'https://api.mercadolibre.com/sites/MLB/search?category=xablau'

export default fetchProducts;
