export const FETCH_DETS = 'FETCH_DETS';
export const SAVE_DETS = 'SAVE_DETS';

const fetchAction = { type: FETCH_DETS };

const saveDets = (details) => ({
  type: SAVE_DETS,
  payload: details,
});

const fetchDetails = (id) => async (dispatch) => {
  dispatch(fetchAction);
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const details = await response.json();
  return dispatch(saveDets(details));
}

export default fetchDetails;
