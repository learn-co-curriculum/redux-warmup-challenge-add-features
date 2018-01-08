import { combineReducers } from 'redux';
import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING
} from './actions/types';

const paintingsReducer = (state = [], action) => {
  // console.log('in paintingsReducer', action);
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_PAINTING:
      return state.filter(pntg => pntg.id !== action.id);
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  // console.log('in activePaintingIdReducer', action);
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case FETCH_PAINTINGS:
      return action.payload[0].id;
    case 'CHANGE_VISIBLE_PAINTINGS':
      return null;
    default:
      return state;
  }
};

const visibilityReducer = (state = 'ALL', action) => {
  console.log('visibilityReducer', action);
  switch (action.type) {
    case 'CHANGE_VISIBLE_PAINTINGS':
      return action.filter;
    default:
      return state;
  }
  return state;
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  visibilityFilter: visibilityReducer
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
