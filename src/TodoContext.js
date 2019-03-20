import { createContext } from "react";

const TodoContext = createContext({ 
    todos: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
});

export default TodoContext;
