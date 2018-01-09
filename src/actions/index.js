import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING
} from './types';

export function fetchPaintings() {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/paintings')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: FETCH_PAINTINGS, payload: data });
      });
  };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(id) {
  return { type: DELETE_PAINTING, id };
}

export function toggleVisibleMuseum(museum) {
  return { type: 'CHANGE_VISIBLE_PAINTINGS', filter: museum };
}
