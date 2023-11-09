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
} from "./ActionType";

const initialState = {
  category: [],
  isLoading: false,
  error: null,
  categoryById: null,
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
    case ADD_CATEGORY_REQUEST:
    case GET_CATEGORY_BY_ID_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        category: action.payload,
      };
    case GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categoryById: action.payload,
        error: null,
      };
    case ADD_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, error: false };
    case GET_CATEGORY_FAILURE:
    case ADD_CATEGORY_FAILURE:
    case GET_CATEGORY_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
