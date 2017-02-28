import * as ActionTypes from '../constants/actionTypes';

const initState = {
  selectedTab: 1
};

export default(state = initState, action) => {
  switch (action.type) {
    case ActionTypes.STRATEGY_TAB_INDEX:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }

};