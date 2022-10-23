import React from 'react';
import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function TodoForm(props) {
    const [todoInput, setTodoInput] = useState('');
    const [todoId, setTodoId] = useState(0);
    
    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onSubmit({
            id: todoId,
            text: todoInput,
        });
        setTodoInput('');
        setTodoId(todoId + 1);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Add todo" 
                    value={todoInput} 
                    onChange={handleChange} 
                    name="todoInput" 
                    autoComplete="off" 
                    className="input input-bordered input-primary w-full" />
                    <button type="button" className="btn btn-square" onClick={handleSubmit}>
                    <PaperAirplaneIcon className="w-6 h-6 text-primary" />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm