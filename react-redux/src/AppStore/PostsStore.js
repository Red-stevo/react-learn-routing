import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id:1, title:"Welcome to coding.", content:"LuaCoding Challenge The Best NAND the greatest coding ground."},
    {id:2, title:"Code With Us.", content:"Abutra Challenge The Best NAND the greatest coding ground."}
]


const PostsStore = createSlice({
    name:"posts",
    initialState,
    reducers:{
        AddPost:{
            reducers(state, action) {
                state = [...state, action.payload]
            },prepare(title, content){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
});

export const AllPosts = (state) => state.posts;

export const {AddPost} = PostsStore.actions;

export default PostsStore.reducer;