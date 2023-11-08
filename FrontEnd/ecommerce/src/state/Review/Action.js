import axios from "axios";
import {
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  GET_REVIEW_FAILURE,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
} from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
import authHeader from "../../config/auth-header";
import { toast } from "react-toastify";

export const createReview = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_REVIEW_REQUEST });
  try {
    const data = await axios.post(`${API_BASE_URL}/api/v1/review`, reqData, {
      ...authHeader(),
      "Content-Type": "application/json",
    });
    dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data.data });
    toast.success("Tạo đánh giá thành công");
  } catch (error) {
    dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.message });
    toast.error("Tạo đánh giá thất bại");
  }
};

export const getReviews = (reqData) => async (dispatch) => {
  dispatch({ type: GET_REVIEW_REQUEST });
  try {
    const data = await axios.get(`${API_BASE_URL}/api/v2/reviews/${reqData}`);
    dispatch({ type: GET_REVIEW_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_REVIEW_FAILURE, payload: error.message });
  }
};
