import {
  DETAILS_LOWONGAN_FAILED,
  DETAILS_LOWONGAN_REQUEST,
  DETAILS_LOWONGAN_SUCCESS,
  LOWONGAN_FAILED,
  LOWONGAN_REQUEST,
  LOWONGAN_SUCCESS,
} from '../../const';
import axios from 'axios';
import {env} from '../../../../env';

export const listJobs = () => async dispatch => {
  try {
    dispatch({type: LOWONGAN_REQUEST});

    const {data} = await axios.get(`${env.API_URL}/job`);

    dispatch({
      type: LOWONGAN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: LOWONGAN_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const listJobsDetails = id => async dispatch => {
  try {
    dispatch({type: DETAILS_LOWONGAN_REQUEST});

    const {data} = await axios.get(`${env.API_URL}/job/${id}`);

    dispatch({
      type: DETAILS_LOWONGAN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DETAILS_LOWONGAN_FAILED,
      payload: error.response.data.message,
    });
  }
};
