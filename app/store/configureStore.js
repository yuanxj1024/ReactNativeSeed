import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

export default (initialState = {}) => {
  return applyMiddleware(thunkMiddleware)(createStore)(reducers, initialState);
};
