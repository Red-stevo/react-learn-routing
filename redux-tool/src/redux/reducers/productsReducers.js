import {productsActionsTypes} from "../actions/actionTypes/productsActionsTypes.js";

const initialState = {
    products: [],
}
export const productsReducer = (state= initialState, {type, payload}) => {
    console.log("products reducer.")
    if (type === productsActionsTypes.SET_PRODUCTS) {
        return {...state, products : payload}
    }else
        return state;
}