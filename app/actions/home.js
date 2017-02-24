import * as ActionTypes from '../constants/actionTypes';

function fetchedHotStock(data) {
  return {type: ActionTypes.FETCH_HOME_HOTSTOCK, data};
}

function fetchingHotStock(data) {
  return {type: ActionTypes.FETCHING_HOME_HOTSTOCK, data}
}

export function fetchHotStock(arg) {
  return (dispatch) => {
    dispatch(fetchingHotStock({loading: true}));
    setTimeout(() => {
      console.log('fetch hot stock');
      dispatch(fetchedHotStock({
        homeHotStock: [1, 2, 3]
      }));
    }, 1000);
  };
}