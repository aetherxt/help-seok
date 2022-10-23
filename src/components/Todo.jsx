import React from 'react'
import { useState } from 'react';
import TodoForm from "../components/TodoForm";
import { XCircleIcon, PencilSquareIcon } from '@heroicons/react/24/outline';


function Todo({ todos, completeTodo, removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    return (
        <div>
            <table className="table table-zebra w-full">
                <tbody>
                    {todos.map((todo, index) => (
                        <tr className={todo.isComplete ? 'opacity-50' : ''}>
                            <th 
                            key={todo.id}
                            className={todo.isComplete? 'line-through w-2/3': 'w-2/3'}
                            onClick={() => completeTodo(todo.id)}>
                                {todo.text}
                            
                            </th>
                            <td> 
                                <PencilSquareIcon className="w-6 h-6 text-primary"
                                onClick={() => setEdit({ id: todo.id, value: todo.text })}/>
                            </td>
                            <td>
                                <XCircleIcon className='w-6 h-6 text-primary' 
                                onClick={() => removeTodo(todo.id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Todo