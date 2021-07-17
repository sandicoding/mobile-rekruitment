import {combineReducers} from 'redux';
import {AuthReducer, userRegisterReducer} from './AuthReducer';
import {JobListReducer, listJobDetails} from './JobReducer';
import {MyApplyListReducer, DetailMyApplyListReducer , ApplyJobs} from './MyApplyReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  register: userRegisterReducer,
  jobsList: JobListReducer,
  jobsDetails: listJobDetails,
  apply : ApplyJobs,
  applyList: MyApplyListReducer,
  DetailApply: DetailMyApplyListReducer,
});

export default rootReducer;
