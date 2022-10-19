import React from 'react';
import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";


function TodoForm(props) {
    let todoId = 0;
    const [todoInput, setTodoInput] = useState('');
    
    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // props.onSubmit({
        //     id: todoId,
        //     text: todoInput,
        // });
        console.log(todoId, todoInput);
        setTodoInput('');
        todoId ++;
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Add todo" value={todoInput} onChange={handleChange} name="todoInput" autoComplete="off" className="input input-bordered w-full" />
                    <button type="button" className="btn btn-square">
                    <PaperAirplaneIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm