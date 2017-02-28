import * as ActionTypes from '../constants/actionTypes';

const initState = {
  homeHotStock: []
};

export default(state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_HOME_BANNER:
      return Object.assign({}, state, action.data);
    case ActionTypes.FETCHING_HOME_HOTSTOCK:
      return Object.assign({}, state, {loading: action.data.loading});
    case ActionTypes.FETCH_HOME_HOTSTOCK:
      const {loading, homeHotStock} = action.data;
      return Object.assign({}, state, {
        homeHotStock: [...homeHotStock],
        loading: false
      });
    default:
      return state;
  }
};