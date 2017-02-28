import {combineReducers} from 'redux';

import user from './user';
import homePage from './home';
import strategyPage from './strategy';

export default combineReducers({user, homePage, strategyPage});
