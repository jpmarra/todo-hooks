import React, { useState } from "react";
import TodoContext from "./TodoContext";

const GlobalState = props => {
    const [todos, setTodos] = useState([
        { value: "Learn Hooks", completed: false, id: 1 },
        { value: "Eat lunch", completed: false, id: 2 }
    ]);
    const addTodo = todo => {
        const updatedTodos = [...todos];
        updatedTodos.push(todo);
        setTodos(updatedTodos);
    };
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                removeTodo,
                toggleTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default GlobalState;
