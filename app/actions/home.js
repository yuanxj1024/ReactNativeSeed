import * as ActionTypes from '../constants/actionTypes';

function fetchedHotStock(data) {
  return {type: ActionTypes.fetchHotStock, data};
}

function fetchingHotStock(data) {
  return {type: ActionTypes.fetchingHotStock, data}
}

export function fetchHotStock(arg) {
  return (dispatch) => {
    dispatch(fetchingHotStock({loading: true}));
    setTimeout(() => {
      dispatch(fetchedHotStock({
        homeHotStock: [1, 2, 3, 4, 5]
      }));
    }, 3000);
  };
}