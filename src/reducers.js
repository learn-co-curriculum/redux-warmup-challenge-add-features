import { combineReducers } from "redux";
import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  SELECT_GALLERY
} from "./actions/types";

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_PAINTING:
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    // set first painting to active when we fetch paintings
    case FETCH_PAINTINGS:
      return action.payload[0].id;
    // (action.payload && action.payload.length > 0 && action.payload[0].id) ||
    // null
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case DELETE_PAINTING:
      return null;
    default:
      return state;
  }
};

// shape?
// 'name of gallery'
// true
// { gallery: '', artist: '', year: }
// { gallery: '' }
const paintingFiltersReducer = (state = { gallery: null }, action) => {
  switch (action.type) {
    case SELECT_GALLERY:
      return { ...state, gallery: action.gallery };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  filters: paintingFiltersReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
