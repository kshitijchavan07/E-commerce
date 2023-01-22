import { combineReducers } from "redux";
import ProductReducer from "./reduxTool/products/ProductReducer";
import  CartReducer  from "./reduxTool/Cart/CartReducer";

const RootReducer=combineReducers({
    products:ProductReducer,
    carts:CartReducer,
   
})
export default RootReducer