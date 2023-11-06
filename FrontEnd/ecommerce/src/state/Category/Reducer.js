import {
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "./ActionType";

const initialState = {
  category: [],
  isLoading: false,
  error: null,
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        category: action.payload,
      };

    case GET_CATEGORY_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
