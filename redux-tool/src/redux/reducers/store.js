import {createStore} from "redux";
import { AllProducts} from "./index.js";

export const  store = createStore(AllProducts,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());