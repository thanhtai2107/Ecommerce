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

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
  order: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return { ...state, isLoading: false, error: null, order: action.payload };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_ORDER_BY_ID_REQUEST:
    case GET_ORDER_BY_USER_ID_REQUEST:
    case GET_ORDER_REQUEST:
    case CONFIRM_ORDER_REQUEST:
    case CANCEL_ORDER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ORDER_BY_ID_SUCCESS:
    case CONFIRM_ORDER_SUCCESS:
    case CANCEL_ORDER_SUCCESS:
      return { ...state, isLoading: false, error: null, order: action.payload };
    case GET_ORDER_SUCCESS:
    case GET_ORDER_BY_USER_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        orders: action.payload,
      };
    case GET_ORDER_BY_ID_FAILURE:
    case GET_ORDER_BY_USER_ID_FAILURE:
    case GET_ORDER_FAILURE:
    case CANCEL_ORDER_FAILURE:
    case CONFIRM_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
