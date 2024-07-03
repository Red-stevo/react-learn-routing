import {productsActionsTypes} from "../actions/actionTypes/productsActionsTypes.js";

const initialState = {
    products:[{
        name:"stephen",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4giKiPRejlKdfsyw8tJf_AHaEo%26pid%3DApi&f=1&ipt=50a93954b0967c45231fc3579ea38fa2ab8cd3f1b5556265e8a455eac53eeec8&ipo=images"
    }]
}
export const productsReducer = (state= initialState, {type, payload}) =>{
    if(type === productsActionsTypes.SET_PRODUCTS){
        return [...state, ...payload]
    }else
        return state;
}