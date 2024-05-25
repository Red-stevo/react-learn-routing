import {configureStore} from "@reduxjs/toolkit";
import {counter} from "./counterStore.js";

export const appStore = configureStore({
    reducer : {
        counterReducer:counter
    }
});