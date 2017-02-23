import * as ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_INFO:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
