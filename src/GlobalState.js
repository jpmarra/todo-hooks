import React, { useContext, useReducer } from 'react';
import TodoContext from './TodoContext';
import { todoReducer, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './reducer';

const GlobalState = props => {
    const context = useContext(TodoContext);
    const [todosState, dispatch] = useReducer(todoReducer, context.todos);

    const addTodo = todo => {
        setTimeout(() => {
            dispatch({ type: ADD_TODO, todo });
        }, 300);
    };
    const removeTodo = todoId => {
        setTimeout(() => {
            dispatch({ type: REMOVE_TODO, todoId });
        }, 300);
    };

    const toggleTodo = todoId => {
        setTimeout(() => {
            dispatch({ type: TOGGLE_TODO, todoId });
        }, 300);
    };
    return (
        <TodoContext.Provider
            value={{
                todos: todosState,
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
