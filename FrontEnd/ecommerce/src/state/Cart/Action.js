import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
import { toast } from "react-toastify";
import axios from "axios";
import authHeader from "../../config/auth-header";

export const getCart = (reqData) => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  console.log("request data", reqData);
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v1/cart/${reqData}`,
      authHeader()
    );
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};
export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    const data = await axios.post(
      `${API_BASE_URL}/api/v1/cart/addToCart`,
      reqData,
      { ...authHeader(), "Content-Type": "application/json" }
    );
    console.log("item add", data.data);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    toast.success("Đã thêm sản phẩm vào giỏ hàng");
  } catch (error) {
    toast.error("Thêm sản phẩm vào giỏ hàng thất bại");
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeCartItem = (cartItemId, userId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
  try {
    const data = await axios.delete(
      `${API_BASE_URL}/api/v1/cart/${userId}/deleteItem/${cartItemId}`,
      authHeader()
    );
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
    toast.success("Xóa sản phẩm thành công");
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
    toast.error("Xóa sản phẩm thất bại");
  }
};

export const updateCart = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
  try {
    const data = await axios.put(
      `${API_BASE_URL}/api/v1/cart/update/${reqData.cartItemId}`,
      authHeader()
    );
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
    toast.success("Cập nhật giỏ hàng thành công");
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
    toast.error("Cập nhật giỏ hàng thất bại");
  }
};
