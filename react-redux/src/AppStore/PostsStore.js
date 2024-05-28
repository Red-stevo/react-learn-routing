import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id:1, title:"Welcome to coding.", content:"LuaCoding Challenge The Best NAd the greatest coding ground."},
    {id:2, title:"Code With Us.", content:"Abutra Challenge The Best NAd the greatest coding ground."}
]


const PostsStore = createSlice({
    name:"posts",
    initialState,
    reducers:{

    }
});

export default PostsStore.reducer