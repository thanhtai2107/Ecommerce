import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOG_OUT,
} from "./ActionType";
import { toast } from "react-toastify";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

const token = localStorage.getItem("jwt");

export const register = (userdata) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const respone = await axios.post(
      `${API_BASE_URL}/api/v1/register`,
      userdata
    );
    const user = respone.data;
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const login = (userdata) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const respone = await axios.post(
      `${API_BASE_URL}/api/v1/authenticate`,
      userdata
    );
    const user = respone.data;
    localStorage.setItem("jwt", user.token);
    dispatch(loginSuccess(user));
    toast.success("Đăng nhập thành công");
  } catch (error) {
    dispatch(loginFailure(error.message));
    toast.warn("Đăng nhập thất bại");
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const respone = await axios.get(`${API_BASE_URL}/api/v1/authenticate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = respone.data;

    dispatch(getUserSuccess);
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT, payload: null });
  localStorage.clear();
};
