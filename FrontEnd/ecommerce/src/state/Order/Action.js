import {
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CONFIRM_ORDER_FAILURE,
  CONFIRM_ORDER_REQUEST,
  CONFIRM_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_USER_ID_FAILURE,
  GET_ORDER_BY_USER_ID_REQUEST,
  GET_ORDER_BY_USER_ID_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "./ActionType";
import { API_BASE_URL, api } from "../../config/apiConfig";
import { toast } from "react-toastify";
import axios from "axios";
import authHeader from "../../config/auth-header";

export const createOrder = (reqData) => async (dispactch) => {
  dispactch({ type: CREATE_ORDER_REQUEST });
  console.log("create order", reqData);
  try {
    const data = await axios.post(`${API_BASE_URL}/api/v1/checkout`, reqData, {
      ...authHeader(),
      "Content-Type": "application/json",
    });
    dispactch({ type: CREATE_ORDER_SUCCESS, payload: data });
    toast.success("Chúc mừng bạn đã đặt hàng thành công");
  } catch (error) {
    dispactch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    toast.error("Không thể thanh toán đơn hàng");
  }
};

export const getOrders = () => async (dispactch) => {
  dispactch({ type: GET_ORDER_REQUEST });
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v1/admin/orders`,
      authHeader()
    );
    dispactch({ type: GET_ORDER_SUCCESS, payload: data.data });
  } catch (error) {
    dispactch({ type: GET_ORDER_FAILURE, payload: error.message });
  }
};

export const getOrdersByUser = (reqData) => async (dispactch) => {
  dispactch({ type: GET_ORDER_BY_USER_ID_REQUEST });
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v1/orders/${reqData}`,
      authHeader()
    );
    console.log("data", data.data);
    dispactch({ type: GET_ORDER_BY_USER_ID_SUCCESS, payload: data.data });
  } catch (error) {
    console.log("Lỗi");
    dispactch({ type: GET_ORDER_BY_USER_ID_FAILURE, payload: error.message });
  }
};
export const getOrder = (orderId) => async (dispactch) => {
  dispactch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const data = await axios.get(
      `${API_BASE_URL}/api/v1/admin/orders/${orderId}`,
      authHeader()
    );
    dispactch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data.data });
  } catch (error) {
    dispactch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};
export const confirmOrder = (orderId) => async (dispactch) => {
  dispactch({ type: CONFIRM_ORDER_REQUEST });
  const reqData = {
    status: "CONFIRM",
  };
  try {
    const data = await axios.put(
      `${API_BASE_URL}/api/v1/admin/orders/confirm/${orderId}`,
      reqData,
      { ...authHeader(), "Content-Type": "application/json" }
    );
    dispactch({ type: CONFIRM_ORDER_SUCCESS, payload: data.data });
  } catch (error) {
    dispactch({ type: CONFIRM_ORDER_FAILURE, payload: error.message });
  }
};

export const cancelOrder = (orderId) => async (dispactch) => {
  dispactch({ type: CANCEL_ORDER_REQUEST });
  const reqData = {
    status: "CANCEL",
  };
  try {
    const data = await axios.put(
      `${API_BASE_URL}/api/v1/admin/orders/cancel/${orderId}`,
      reqData,
      { ...authHeader(), "Content-Type": "application/json" }
    );
    dispactch({ type: CANCEL_ORDER_SUCCESS, payload: data.data });
  } catch (error) {
    dispactch({ type: CANCEL_ORDER_FAILURE, payload: error.message });
  }
};
