import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";

// Register Action Creators
const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const register = (userData) =>
  async function (dispatch) {
    dispatch(registerRequest());

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        userData
      );
      const user = response.data;

      if (user.jwt) {
        localStorage.setItem("jwt", user.jwt);
      }
      console.log("registered user :- ", user);
      dispatch(registerSuccess(user.jwt));
    } catch (error) {
      console.log("error :- ", error);
      dispatch(registerFailure(error));
    }
  };

// Login Action Creators
const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) localStorage.setItem("jwt", user.jwt);
    console.log("login :- ", user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const getUser = (jwt) => async (dispatch) => {
  console.log("inside get user jwt", jwt);
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log("get user", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    console.log('error', error);
    dispatch(getUserFailure(error));
  }
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT, payload: null });
    localStorage.clear();
  };
};