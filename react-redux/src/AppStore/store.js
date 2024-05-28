import {configureStore} from "@reduxjs/toolkit";
import PostsStore from "./PostsStore.js";

const store = configureStore({
    reducer:{
        posts:PostsStore
    }
});

export default store