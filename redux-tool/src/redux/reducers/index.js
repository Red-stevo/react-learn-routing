import {combineReducers} from "redux";
import {productsReducer} from "./productsReducers.js";


export const AllProducts = combineReducers({
    productsState:productsReducer,
});