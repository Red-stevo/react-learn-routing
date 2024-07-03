import {productsActionsTypes} from "./actionTypes/productsActionsTypes.js";

export const setProducts = (products) => {
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