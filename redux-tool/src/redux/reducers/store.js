import {createStore} from "redux";
import {productsReducer} from "./productsReducers.js";

export const  store = createStore(productsReducer);