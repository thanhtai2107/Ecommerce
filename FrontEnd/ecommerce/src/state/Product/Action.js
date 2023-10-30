import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";

export const findProducts = () => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  // const { category, minPrice, maxPrice, pageNumber, pageSize } = reqData;
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/v2/products`);
    console.log("hello");
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const productId = reqData;
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/api/v2/product/${productId}`
    );
    console.log("this is data");
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
