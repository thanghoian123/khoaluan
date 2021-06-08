import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import billReducer from "./billReducer";

const reducers = combineReducers({
  productReducer,
  cartReducer,
  userReducer,
  billReducer,
});
export default reducers;
