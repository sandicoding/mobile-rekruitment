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
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_FAILED,
  UPDATE_AVATAR_SUCCESS,
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

export const AuthReducer = (state = INITIAL_STATE, {type, payload}) => {
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
        isLoading : false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        message: payload,
        isLoggin: false,
        isLoading: false,
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


export const userRegisterReducer = (state = { userInfo : [] }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {loading: true};
    case USER_REGISTER_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case USER_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const userUpdatePhotoReducer = (state = {userInfo: []}, action) => {
  switch (action.type) {
    case UPDATE_AVATAR_REQUEST:
      return {loading: true};
    case UPDATE_AVATAR_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case UPDATE_AVATAR_FAILED:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};


