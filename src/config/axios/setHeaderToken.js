import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const setHeaderToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // console.warn(axios.defaults.headers);
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
