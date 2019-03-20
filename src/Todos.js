import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';

import TodoContext from './TodoContext';
import Todo from './Todo';

const Todos = () => {
    const context = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');

    const handleTodoSubmit = e => {
        e.preventDefault();
        context.addTodo({
            value: newTodo,
            completed: false,
            id: uniqid()
        });
        setNewTodo('');
    };

    return (
        <>
            {context.todos.map(todo => (
                <Todo todo={todo} key={todo.id} />
            ))}
            <form className="add-form" onSubmit={handleTodoSubmit}>
                <input
                    className="todo-input"
                    placeholder="Add Item"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                <button className="todo-button" type="submit">
                    Add
                </button>
            </form>
        </>
    );
};

export default Todos;
