import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0,
    name:'varun'

}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
          state.value+=1
        },
        decrement: (state, action) => {
            state.value-=1

        },
        reset:(state,action)=>{
            state.value = 0;

        },
        changeByValue: (state,action)=>{
            state.value =action.payload
        },

        changeName:(state,action) =>{
            state.name =action.payload

        }
    }
})


export const {increment,decrement,changeByValue,reset,changeName} =counterSlice.actions

export default counterSlice.reducer