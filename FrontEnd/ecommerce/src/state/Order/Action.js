import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "../../config/apiConfig";

export const createOrder = (reqData) => async (dispactch) => {
  dispactch({ type: CREATE_ORDER_REQUEST });
  console.log("create order", reqData);
  try {
    const data = await api.post("api/v1/checkout", reqData);
    dispactch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispactch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};

export const getOrder = (orderId) => async (dispactch) => {
  dispactch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const data = await api.get(`api/v1/checkout1/${orderId}`);
    dispactch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispactch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};
