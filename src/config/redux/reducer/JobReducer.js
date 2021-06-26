import {LOWONGAN_FAILED, LOWONGAN_REQUEST, LOWONGAN_SUCCESS} from '../../const';

const initialState = {
  jobs: [],
};
export function JobListReducer(state = initialState, action) {
  switch (action.type) {
    case LOWONGAN_REQUEST:
      return {
        loading: true,
        jobs: [],
      };
    case LOWONGAN_SUCCESS:
      return {
        loading: false,
        jobs: action.payload,
      };
    case LOWONGAN_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
