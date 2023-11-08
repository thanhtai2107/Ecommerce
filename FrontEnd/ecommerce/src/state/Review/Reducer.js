import { CREATE_ORDER_SUCCESS } from "../Order/ActionType";
import {
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  GET_REVIEW_FAILURE,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
} from "./ActionType";

const initialState = {
  reviews: [],
  isLoading: false,
  error: null,
  review: null,
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
    case GET_REVIEW_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case GET_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviews: action.payload,
        error: null,
      };
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        review: action.payload,
        error: null,
      };
    case CREATE_REVIEW_FAILURE:
    case GET_REVIEW_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
