import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_ALL_PRODUCT_FAILURE,
  FIND_ALL_PRODUCT_REQUEST,
  FIND_ALL_PRODUCT_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_TITLE_FAILURE,
  FIND_PRODUCT_BY_TITLE_REQUEST,
  FIND_PRODUCT_BY_TITLE_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./ActionType";
import { API_BASE_URL, api, api2 } from "../../config/apiConfig";
import axios from "axios";
import authHeader from "../../config/auth-header";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  // const { category, minPrice, maxPrice, pageNumber, pageSize } = reqData;
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v2/products?title=${reqData.title}&category=${reqData.category}&page=${reqData.page}&size=${reqData.size}&sortList=${reqData.sortList}&sortDirection=${reqData.sortDirection}`
    );
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};
export const findAllProduct = () => async (dispatch) => {
  dispatch({ type: FIND_ALL_PRODUCT_REQUEST });
  // const { category, minPrice, maxPrice, pageNumber, pageSize } = reqData;
  try {
    const data = await axios.get(`${API_BASE_URL}/api/v2/allproduct`);
    dispatch({ type: FIND_ALL_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: FIND_ALL_PRODUCT_FAILURE, payload: error.message });
  }
};
export const findProductByTitle = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_TITLE_REQUEST });
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v2/product?title=${reqData.title}&page=${reqData.page}&size=${reqData.size}&sortList=${reqData.sortList}&sortDirection=${reqData.sortDirection}`
    );
    dispatch({ type: FIND_PRODUCT_BY_TITLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_TITLE_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const productId = reqData;
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/api/v2/product/${productId}`
    );
    console.log("this is data", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const addProduct = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  try {
    const data = await api2.post("/api/v1/admin/addProduct", reqData);
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
  }
};

export const updateProduct = (reqData, productId) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    const data = await api2.put(
      `/api/v1/admin/updateProduct/${productId}`,
      reqData
    );
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const deleteProduct = (reqData) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    const data = await axios.delete(
      `${API_BASE_URL}/api/v1/admin/deleteProduct/${reqData}`,
      authHeader()
    );
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};
