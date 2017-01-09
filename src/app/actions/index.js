import axios from 'axios';

export const REQUEST_DEPENDENCIES = 'REQUEST_DEPENDENCIES';
export const RECEIVE_DEPENDENCIES = 'RECEIVE_DEPENDENCIES';

function requestDependencies() {
  return {
    type: REQUEST_DEPENDENCIES,
  };
}

function receiveDependencies(dependencies) {
  return {
    type: RECEIVE_DEPENDENCIES,
    dependencies,
  };
}

function fetchDependencies() {
  return dispatch => {
    dispatch(requestDependencies());
    axios.get('/deps').then(res => res.data)
    .then((list) => dispatch(receiveDependencies(list)));
  };
}

function shouldFetchDependencies(state) {
  const dependencies = state.dependencies;
  if (dependencies.fetching) return false;
  if (Object.keys(dependencies.list).length === 0) return true;
  return false;
}

export function hydrateDependencies() {
  return (dispatch, getState) => {
    if (shouldFetchDependencies(getState())) {
      return dispatch(fetchDependencies());
    }
  };
}
