import {MY_APPLY_FAILED, MY_APPLY_REQUEST, MY_APPLY_SUCCESS} from '../../const';

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
