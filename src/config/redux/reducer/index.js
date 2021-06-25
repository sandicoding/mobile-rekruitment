import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import {JobListReducer} from './JobReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  jobsList: JobListReducer,
});

export default rootReducer;
