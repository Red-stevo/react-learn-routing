import {productsActionsTypes} from "./actionTypes/productsActionsTypes.js";

export const setProducts = (products) => {
    console.log("set Products")
    return {
        type:productsActionsTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = (product) => {
    return {
        type: productsActionsTypes.SELECTED_PRODUCT,
        payload:product,
    }
}