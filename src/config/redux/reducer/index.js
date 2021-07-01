import {combineReducers} from 'redux';
import {AuthReducer} from './AuthReducer';
import {JobListReducer} from './JobReducer';
import {MyApplyListReducer} from './MyApplyReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  jobsList: JobListReducer,
  applyList: MyApplyListReducer,
});

export default rootReducer;
