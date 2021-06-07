import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert, NativeModules, ToastAndroid} from 'react-native';
import Toast from 'react-native-toast-message';
import {env} from '../../../../env';
import {setHeaderToken} from '../../axios/setHeaderToken';

import {
  IS_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_INITIAL_ROUTE_NAME,
  SET_IS_LOGIN,
  SET_TOKEN,
  SET_USER,
} from '../../const';

export const login =
  (data, navigation = null) =>
  dispatch => {
    dispatch({type: IS_LOADING});
    axios
      .post(`${env.API_URL}/login`, data)
      .then(async result => {
        if (result.data) {
          let response = result.data;
          let token = response.data.access_token;
          let user = response.data.user;

          await AsyncStorage.setItem('access_token', token);

          dispatch({type: SET_USER, payload: user});
          dispatch({type: SET_TOKEN, payload: token});
          dispatch({type: SET_IS_LOGIN});
          dispatch({type: IS_LOADING});
          setHeaderToken(token);

          return navigation.replace('MainLayout');
        }
      })
      .catch(err => {
        console.warn(err);
        // let result = err.response;
        // if (result?.data) {
        //   ToastAndroid.showWithGravity(
        //     result.data.message,
        //     ToastAndroid.SHORT,
        //     ToastAndroid.BOTTOM,
        //   );
        // }
      });
  };

export const logout = navigation => async dispatch => {
  await AsyncStorage.removeItem('access_token');
  await AsyncStorage.removeItem('user');
  await AsyncStorage.removeItem('initialRouteName');

  dispatch({type: SET_USER, payload: {}});
  dispatch({type: SET_TOKEN, payload: null});
  dispatch({type: LOGOUT, payload: false});
  dispatch({type: SET_IS_LOGIN});
  dispatch({type: SET_INITIAL_ROUTE_NAME, payload: 'Login'});

  navigation.replace('Login');
};
