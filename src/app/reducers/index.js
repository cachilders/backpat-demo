import { combineReducers } from 'redux';
import { REQUEST_DEPENDENCIES, RECEIVE_DEPENDENCIES } from '../actions/index';

function dependencies(state = {
  fetching: false,
  list: {},
}, action) {
  switch (action.type) {
    case REQUEST_DEPENDENCIES:
      return Object.assign({}, state, {
        fetching: true,
      });
    case RECEIVE_DEPENDENCIES:
      return Object.assign({}, state, {
        fetching: false,
        list: action.dependencies,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dependencies,
});

export default rootReducer;
