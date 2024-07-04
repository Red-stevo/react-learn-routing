import {productsActionsTypes} from "../actions/actionTypes/productsActionsTypes.js";

const initialState = {
    products: [],
}
export const productsReducer = (state= initialState, {type, payload}) => {
    if (type === productsActionsTypes.SET_PRODUCTS) {
        return {...state, products:payload}
    }else
        return state;

}

export const productReducer = (state = {product:""}, {type, payload}) => {
    if(type === productsActionsTypes.SELECTED_PRODUCT){
        return {...state, product:payload};
    }else {
        return state;
    }
}