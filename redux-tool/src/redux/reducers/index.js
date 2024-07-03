import {combineReducers} from "redux";
import {productsReducer} from "./productsReducers.js";


export const AllProduct = combineReducers({
    productsState:productsReducer,
});