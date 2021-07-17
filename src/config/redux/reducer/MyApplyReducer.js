import {APPLY_FAILED, APPLY_REQUEST, APPLY_SUCCESS, DETAIL_MY_APPLY_FAILED, DETAIL_MY_APPLY_REQUEST, DETAIL_MY_APPLY_SUCCESS, MY_APPLY_FAILED, MY_APPLY_REQUEST, MY_APPLY_SUCCESS} from '../../const';

const initialState = {
  applys: [],
};
export function MyApplyListReducer(state = initialState, action) {
    switch (action.type) {
        case MY_APPLY_REQUEST:
        return {
          loading: true,
          applys: [],
        };
        case MY_APPLY_SUCCESS:
        return {
          loading: false,
          applys: action.payload,
        };
        case MY_APPLY_FAILED:
        return {
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
}

export const DetailMyApplyListReducer = (state = { apply : [] }, action) => {
  switch (action.type) {
    case DETAIL_MY_APPLY_REQUEST:
      return {loading: true, ...state};
    case DETAIL_MY_APPLY_SUCCESS:
      return {loading: false, apply: action.payload};
    case DETAIL_MY_APPLY_FAILED:
      return {loading: false, apply: action.payload};
    default:
      return state;
  }
};

export const ApplyJobs = ( state = { }, action) => {
  switch (action.type) {
    case APPLY_REQUEST:
      return {loadingApply: true};
    case APPLY_SUCCESS:
      return {loadingApply: false, success: true, apply: action.payload};
    case APPLY_FAILED:
      return {loadingApply: false, errorApply: action.payload};
    default:
      return state;
  }
}