import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  SELECT_GALLERY
} from "./types";
import artworks from "../data/artworks";

export function fetchPaintings() {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_PAINTINGS, payload: artworks });
  };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(painting) {
  return { type: DELETE_PAINTING, id: painting.id };
}

export function selectGallery(gallery) {
  return { type: SELECT_GALLERY, gallery };
}
