import axios from "axios";
import {
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../../state/Category/ActionType";
import authHeader from "../../config/auth-header";
import { API_BASE_URL } from "../../config/apiConfig";
import { toast } from "react-toastify";
export const getCategory = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_REQUEST });
  try {
    const data = await axios.get(`${API_BASE_URL}/api/v2/getCategory`);
    console.log("data", data.data);
    dispatch({ type: GET_CATEGORY_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAILURE, payload: error.message });
  }
};

export const addCategory = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  try {
    const data = await axios.post(
      `${API_BASE_URL}/api/v1/admin/addCategory`,
      reqData,
      { ...authHeader(), "Content-Type": "multipart/form-data" }
    );
    toast.success("Đã thêm danh mục sản phẩm");
    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_FAILURE, payload: error.message });
    toast.error("Thêm danh mục sản phẩm thất bại");
  }
};

export const updateCategory = (categoryId, reqData) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  try {
    const data = await axios.put(
      `${API_BASE_URL}/api/v1/admin/update/category/${categoryId}`,
      reqData,
      { ...authHeader(), "Content-Type": "multipart/form-data" }
    );
    toast.success("Cập nhật danh mục thành công");
    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_FAILURE, payload: error.message });
    toast.error("Cập nhật danh mục thất bại");
  }
};

export const getCategoryById = (reqData) => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_BY_ID_REQUEST });
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v1/admin/category/${reqData}`,
      authHeader()
    );

    dispatch({ type: GET_CATEGORY_BY_ID_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_BY_ID_FAILURE, payload: error.message });
  }
};
