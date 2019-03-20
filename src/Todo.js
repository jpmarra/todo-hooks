import React, { useContext } from 'react';
import TodoContext from './TodoContext';
import styled from 'styled-components';

const Todo = props => {
    const context = useContext(TodoContext);
    const { todo } = props;

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: bottom;
        width: 50%;
        min-width: 300px;
        max-width: 1024px;
        height: 2rem;
        border-bottom: 1px solid black;
        margin: 1rem;
    `;

    const TodoText = styled.span`
        font-style: ${() => (todo.completed ? 'italic' : 'normal')};
        font-size: 1.5rem;
        color: ${() => (todo.completed ? 'red' : 'black')};
        text-decoration: ${() => (todo.completed ? 'line-through' : 'none')};

        @media only screen and (max-width: 800px) {
            font-size: 1rem;
        }
    `;

    const Actions = styled.div`
        display: flex;
        flex-direction: row;
    `;
    const Checkbox = styled.input`
        appearance: none;
        margin: 0 0.5rem 0 0;
        height: 1.5rem;
        width: 1.5rem;
        border: 1px solid black;
        background-color: white;

        :checked {
            background-color: red;
        }
    `;
    const Remove = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        width: 1.5rem;
        font-size: 1rem;
        color: white;
        border: 1px solid black;
        background-color: black;
    `;

    return (
        <Wrapper>
            <TodoText>{todo.value}</TodoText>
            <Actions>
                <Checkbox
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => context.toggleTodo(todo.id)}
                />
                <Remove onClick={() => context.removeTodo(todo.id)}>X</Remove>
            </Actions>
        </Wrapper>
    );
};

export default Todo;
