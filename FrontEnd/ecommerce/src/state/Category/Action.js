import axios from "axios";
import {
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../../state/Category/ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
export const getCategory = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_REQUEST });
  try {
    const data = await axios.get(`${API_BASE_URL}/api/v2/getCategory`);
    dispatch({ type: GET_CATEGORY_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAILURE, payload: error.message });
  }
};
