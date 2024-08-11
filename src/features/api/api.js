import { createSlice, nanoid } from "@reduxjs/toolkit";
import todoSlice from "../todo/todoSlice";
const initialState = {
    arr:[{text:'ram',age:23}]
}

export const arrSlice = createSlice({
    text:'name',
    initialState,
    reducers:{
       addItem:(state,action)=>{
        const addtext={
            text:action.payload,
            id:nanoid()
        }
        state.arr.push(addtext)
       },
       removeItem:(state, action)=>{
        state.arr = state.arr.filter((e)=>e.id!==action.payload)
       }
    }
})

export const {addItem, removeItem} = todoSlice.action;
export default todoSlice.reducers;