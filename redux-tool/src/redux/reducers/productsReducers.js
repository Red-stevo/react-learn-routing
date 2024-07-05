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
    console.log("product reducer.");
    console.log(type)
    if(type === productsActionsTypes.SELECTED_PRODUCT){
        return {...state, product:payload};
    }else if(type === productsActionsTypes.REMOVE_SELECTED_PRODUCT) {
        console.log("remove selected product.");
        return {product: ""};
    }else {
        return state;
    }
}
