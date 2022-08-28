import React from 'react';
import AppTodoItem from "./AppTodoItem";
const AppTodo = ({todos, remove}) => {

    return (
        <div className="App-todo">
            <ul className="App-todo__list">
                {todos.map((todo) => <AppTodoItem remove={remove} key={todo.id} todo={todo} />)}
            </ul>
        </div>
    );
};

export default AppTodo;