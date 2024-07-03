import {productsActionsTypes} from "../actions/actionTypes/productsActionsTypes.js";

const initialState = {
    products:[]
}
export const productsReducer = (state= initialState, {type, payload}) =>{
    if(type === productsActionsTypes.SET_PRODUCTS){
        return state.products = [...state, ...payload];
    }else
        return state;
}