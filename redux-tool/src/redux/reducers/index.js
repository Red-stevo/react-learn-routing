import {combineReducers} from "redux";
import {productReducer, productsReducer} from "./productsReducers.js";


export const AllProducts = combineReducers({
    productsState:productsReducer,
    productState:productReducer,
});