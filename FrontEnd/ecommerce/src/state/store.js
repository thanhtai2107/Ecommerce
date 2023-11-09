import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./auth/Reducers";
import { customerProductReducer } from "./Product/Reducers";
import { cartReducers } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { categoryReducer } from "./Category/Reducer";
import { userReducer } from "./User/Reducer";
import { reviewReducer } from "./Review/Reducer";

const rootReducers = combineReducers({
  auth: authReducers,
  product: customerProductReducer,
  cart: cartReducers,
  order: orderReducer,
  category: categoryReducer,
  user: userReducer,
  review: reviewReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
