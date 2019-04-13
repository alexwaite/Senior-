import { combineReducers } from 'redux';

import studentReducer from './students';
import campusReducer from './campuses';

export default combineReducers({
  students: studentReducer,
  campuses: campusReducer,
});
