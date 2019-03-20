export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const addTodo = (todo, state) => {
    const updatedTodos = [...state];
    updatedTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;
};
const removeTodo = (todoId, state) => {
    const updatedTodos = state.filter(todo => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;
};

const toggleTodo = (todoId, state) => {
    const updatedTodos = state.map(todo => {
        if (todo.id === todoId) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return addTodo(action.todo, state)
        case REMOVE_TODO:
            return removeTodo(action.todoId, state)
        case TOGGLE_TODO: 
            return toggleTodo(action.todoId, state)
        default:
            return state;
    }
};