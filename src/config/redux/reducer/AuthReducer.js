import {
  CLEAR_LOGIN_ERROR_MESSAGE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOGIN_ERROR_MESSAGE,
  SET_TOKEN,
  SET_USER,
  LOGOUT,
  SET_INITIAL_ROUTE_NAME,
  SET_IS_LOGIN,
  IS_LOADING,
} from '../../const';

const INITIAL_STATE = {
  accessToken: null,
  dataUser: {},
  errorMessage: [],
  message: null,
  isLoggin: false,
  isLoading: false,
  initialRouteName: null,
};

const AuthReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggin: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggin: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        message: payload,
        isLoggin: false,
      };
    case SET_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload,
      };
    case CLEAR_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: [],
      };
    case SET_TOKEN:
      return {
        ...state,
        accessToken: payload,
      };
    case SET_USER:
      return {
        ...state,
        dataUser: payload,
      };
    case SET_INITIAL_ROUTE_NAME:
      return {
        ...state,
        initialRouteName: payload,
      };
    case SET_IS_LOGIN:
      return {
        ...state,
        isLoggin: !state.isLoggin,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return {...state};
  }
};

export default AuthReducer;
