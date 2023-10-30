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
import { api, api2 } from "../../config/apiConfig";

export const getCart = (reqData) => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  console.log("request data", reqData);
  try {
    const data = await api2.get(`api/v1/cart/${reqData}`);
    dispatch({ type: GET_CART_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};
export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  try {
    const data = await api.post(`api/v1/cart/addToCart`, reqData);

    console.log(data);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    console.log("add");
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
  try {
    const data = await api.delete(
      `api/v1/cart/deleteItem/${reqData.cartItemId}`
    );
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};

export const updateCart = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
  try {
    const data = await api.put(`api/v1/cart/update/${reqData.cartItemId}`);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};
