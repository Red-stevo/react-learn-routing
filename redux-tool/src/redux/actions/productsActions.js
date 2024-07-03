import {productsActionsTypes} from "./actionTypes/productsActionsTypes.js";

export const setProducts = (products) => {
    return {
        type:productsActionsTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = ({name, imageUrl, price}) => {
    return {
        type: productsActionsTypes.SELECTED_PRODUCT,
        payload: {
            name,
            imageUrl,
            price,
        }
    }
}