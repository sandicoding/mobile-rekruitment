import {
  APPLY_FAILED,
  APPLY_REQUEST,
  APPLY_SUCCESS,
  DETAIL_MY_APPLY_FAILED,
  DETAIL_MY_APPLY_REQUEST,
  DETAIL_MY_APPLY_SUCCESS,
  MY_APPLY_FAILED,
  MY_APPLY_REQUEST,
  MY_APPLY_SUCCESS,
} from '../../const';
import axios from 'axios';
import {env} from '../../../../env';

export const listMyApply = () => async (dispatch, getState) => {
  try {
    dispatch({type: MY_APPLY_REQUEST});

    const {data} = await axios.get(`${env.API_URL}/apply/my-apply`);

    dispatch({
      type: MY_APPLY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: MY_APPLY_FAILED,
      payload: error.massage,
    });
  }
};

export const listMyApplyDetails = id => async dispatch => {
  try {
    dispatch({type: DETAIL_MY_APPLY_REQUEST});

    const {data} = await axios.get(`${env.API_URL}/apply/my-apply/${id}`);

    dispatch({
      type: DETAIL_MY_APPLY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DETAIL_MY_APPLY_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const applyJob = (file, idJob, navigation) => async dispatch => {
  try {
    dispatch({type: APPLY_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const {data} = await axios.post(
      `${env.API_URL}/apply/${idJob}`,
      file,
      config,
    );

    dispatch({
      type: APPLY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log('erorrr');
    dispatch({
      type: APPLY_FAILED,
      payload: error.response.data.message,
    });
  }
};
