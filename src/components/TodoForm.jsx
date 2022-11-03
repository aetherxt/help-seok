import React from 'react';
import { useState, useEffect, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function TodoForm(props) {
    const [todoInput, setTodoInput] = useState(props.edit ? props.edit.value : '');
    const [todoId, setTodoId] = useState(0);
    
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    });
    
    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: todoInput,
        });
        setTodoInput('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="input-group">
                    {props.edit ? (
                        <>
                            <input type="text" placeholder="Edit todo" 
                            value={todoInput} 
                            onChange={handleChange} 
                            ref={inputRef}
                            name="todoInput" 
                            autoComplete="off" 
                            className="input input-bordered input-secondary w-full" />
                            <button type="button" className="btn btn-square" onClick={handleSubmit}>
                            <PaperAirplaneIcon className="w-6 h-6 text-secondary" />
                            </button>
                        </>
                    ) : (
                        <>
                            <input type="text" placeholder="Add todo" 
                            value={todoInput} 
                            onChange={handleChange} 
                            ref={inputRef}
                            name="todoInput" 
                            autoComplete="off" 
                            className="input input-bordered input-primary w-full" />
                            <button type="button" className="btn btn-square" onClick={handleSubmit}>
                            <PaperAirplaneIcon className="w-6 h-6 text-primary" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </form>
    )
}

export default TodoForm