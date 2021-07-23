import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert, NativeModules, ToastAndroid} from 'react-native';
import Toast from 'react-native-toast-message';
import {env} from '../../../../env';
import {setHeaderToken} from '../../axios/setHeaderToken';

import {
  IS_LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_INITIAL_ROUTE_NAME,
  SET_IS_LOGIN,
  SET_TOKEN,
  SET_USER,
  UPDATE_AVATAR_FAILED,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../../const';

export const login =
  (data, navigation = null) =>
  async dispatch => {
    dispatch({type: IS_LOADING});
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await axios
      .post(`${env.API_URL}/login`, data, config)
      .then(async result => {
        if (result.data) {
          let response = result.data;
          let token = response.data.access_token;
          let user = response.data?.user;

          
          await AsyncStorage.setItem('access_token', token);
          await AsyncStorage.setItem('user', JSON.stringify(user));
          
          

          dispatch({type: SET_USER, payload: user});
          dispatch({type: SET_TOKEN, payload: token});
          dispatch({type: SET_IS_LOGIN});
          dispatch({type: IS_LOADING});
          setHeaderToken(token);
          
          
          navigation.navigate("MainLayout")
          
        }
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILED,
          payload: err.response.data.message,
        });
      });
  };


export const registerAction = (dataRegister, navigation) => async (dispatch) => {

  try {
    
    dispatch({ type : USER_REGISTER_REQUEST})

    
    const {data} = await axios.post(`${env.API_URL}/register`, dataRegister);

    dispatch({
      type : USER_REGISTER_SUCCESS,
      payload : data.data
    })

    // let response = data.data;
    // let token = response.data.access_token;
    // let user = response.data.user;

    // await AsyncStorage.setItem('access_token', token);

    // dispatch({type: SET_USER, payload: user});
    // dispatch({type: SET_TOKEN, payload: token});
    // dispatch({type: SET_IS_LOGIN});
    // setHeaderToken(token);

    navigation.navigate('Login');





  } catch (error) {
    dispatch({
      type : USER_REGISTER_FAIL,
      payload : error.response.data.message
    })
  }
}


export const UpdatePhoto = (file) => async dispatch => {
  try {
    dispatch({type: UPDATE_AVATAR_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const {data} = await axios.post(`${env.API_URL}/user/photo`, file, config);

    dispatch({
      type: UPDATE_AVATAR_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log('erorrr');
    dispatch({
      type: UPDATE_AVATAR_FAILED,
      payload: error.response.data.message,
    });
  }
};  



export const logout = () => async dispatch => {
  await AsyncStorage.removeItem('access_token');
  await AsyncStorage.removeItem('user');
  await AsyncStorage.removeItem('initialRouteName');

  dispatch({type: SET_USER, payload: {}});
  dispatch({type: SET_TOKEN, payload: null});
  dispatch({type: LOGOUT, payload: false});
  

  
};
