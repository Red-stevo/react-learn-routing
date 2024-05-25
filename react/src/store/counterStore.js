import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    count : 0
}

export const counter = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state) => { state.count += 1;},
        decrement:(state) => {state.count-=1;},
        changeByAmount:(state, action) => {state.count += action.payload;},
        reset:(state) => {state.count = 0;}

    }
});

export const {increment, decrement, reset,
changeByAmount} = counter.actions;
export default counter.reducer;