import {MY_APPLY_FAILED, MY_APPLY_REQUEST, MY_APPLY_SUCCESS} from '../../const';
import axios from 'axios';
import {env} from '../../../../env';

export const listMyApply = () => async (dispatch, getState) => {
  try {
    dispatch({type: MY_APPLY_REQUEST});

    // const user = getState()
    // console.warn(user)
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    const {data} = await axios.get(`${env.API_URL}/apply/my-apply`);

   

    dispatch({
      type: MY_APPLY_SUCCESS,
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
      type: MY_APPLY_FAILED,
      payload: error.massage,
    });
  }
};
