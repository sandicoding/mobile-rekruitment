import {
  DETAILS_LOWONGAN_FAILED,
  DETAILS_LOWONGAN_REQUEST,
  DETAILS_LOWONGAN_SUCCESS,
  LOWONGAN_FAILED,
  LOWONGAN_REQUEST,
  LOWONGAN_SUCCESS,
} from '../../const';

const initialState = {
  jobs: [],
};
export const JobListReducer = (state = initialState, action) => {
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
};

export const listJobDetails = (state = {jobsDetail: []}, action) => {
  switch (action.type) {
    case DETAILS_LOWONGAN_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case DETAILS_LOWONGAN_SUCCESS:
      return {
        loading: false,
        jobsDetail: action.payload,
      };
    case DETAILS_LOWONGAN_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
