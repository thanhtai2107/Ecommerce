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

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
    case FIND_PRODUCT_BY_TITLE_REQUEST:
    case FIND_ALL_PRODUCT_REQUEST:
    case ADD_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case FIND_PRODUCTS_SUCCESS:
    case FIND_PRODUCT_BY_TITLE_SUCCESS:
    case FIND_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        error: null,
        product: action.payload,
      };
    case UPDATE_PRODUCT_SUCCESS:
    case DELETE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        error: null,
      };
    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };
    case FIND_PRODUCTS_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
    case FIND_PRODUCT_BY_TITLE_FAILURE:
    case FIND_ALL_PRODUCT_FAILURE:
    case ADD_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
