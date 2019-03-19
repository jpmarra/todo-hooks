import React, { useContext, useState } from "react";

import TodoContext from "./TodoContext";
import Todo from "./Todo";

const Todos = () => {
    const context = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("");

    const handleTodoSubmit = e => {
        e.preventDefault();
        context.addTodo({
            value: newTodo,
            completed: false,
            id: context.todos.length + 1
        });
        setNewTodo("");
    };

    return (
        <>
            {context.todos.map(todo => (
                <Todo todo={todo} />
            ))}
            <form onSubmit={handleTodoSubmit}>
                <input
                    className="todo-input"
                    placeholder="Add Item"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                <button className="todo-button" type="submit">Add</button>
            </form>
        </>
    );
};

export default Todos;
