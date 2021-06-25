import {LOWONGAN_FAILED, LOWONGAN_REQUEST, LOWONGAN_SUCCESS} from '../../const';
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

    // console.log(
    //   dispatch({
    //     type: LOWONGAN_SUCCESS,
    //     pyload: data,
    //   }),
    // );
  } catch (error) {
    dispatch({
      type: LOWONGAN_FAILED,
      payload: error.massage,
    });
  }
};
