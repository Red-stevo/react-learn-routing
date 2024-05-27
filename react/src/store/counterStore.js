import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    count : 0 //this is the value hold and passer.
}

const counterStore = createSlice({
    name:"count",
    initialState,
    reducers:{
        increment:(state) => { state.count += 1},
        decrement:(state) => {state.count-=1},
        changeByAmount:(state, action) => {state.count += action.payload},
        reset:(state) => {state.count = 0}

    }
});

export const {increment, decrement, reset,
changeByAmount} = counterStore.actions;

export default counterStore.reducer;