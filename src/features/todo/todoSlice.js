import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text:"Hello world"}]
}


// creating slice, it's a big version of slice

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            // state ke andar we got updated value inthe sence initialState aur action ke andar action.payload milta hai 
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)  // here we r pushing the todo in the state
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((e)=>
                e.id !== action.payload
            )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer