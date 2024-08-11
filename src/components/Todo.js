import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
export default function Todo(){
    const [item, setItem] = useState('')
    const dispatch = useDispatch()

    const handleClick =()=>{
        console.log(item);
        dispatch(addTodo(item))  // value bhejne ke kaam me aata hai 
        setItem('')
    }
    return(
        <>
        <div>
            <input type="text" name="todo-Item" id="items" placeholder='Type your item' value={item} onChange={(e)=>setItem(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </div>
        </>
    )
}