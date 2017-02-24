import * as ActionTypes from '../constants/actionTypes';

export default(state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_HOME_BANNER:
      return Object.assign({}, state, actions.data);
  }
};