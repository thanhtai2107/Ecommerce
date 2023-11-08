import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../auth/ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
import authHeader from "../../config/auth-header";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v1/admin/users`,
      authHeader()
    );
    dispatch({ type: GET_USER_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
};
