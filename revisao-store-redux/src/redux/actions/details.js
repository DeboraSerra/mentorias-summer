export const FETCH_DETS = 'FETCH_DETS';
export const SAVE_DETS = 'SAVE_DETS';

const fetchDetailsAction = { type: FETCH_DETS };

const saveDetails = (details) => ({
  type: SAVE_DETS,
  payload: details,
})

const fetchDetails = (productId) => async (dispatch) => {
  dispatch(fetchDetailsAction);
  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const details = await response.json();
  return dispatch(saveDetails(details));
}

export default fetchDetails;
