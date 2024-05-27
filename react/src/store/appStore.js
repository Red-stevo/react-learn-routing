import {configureStore} from "@reduxjs/toolkit";
import counterStore from "./counterStore.js";



export const appStore = configureStore({
    reducer : {
        counter:counterStore
    }
});