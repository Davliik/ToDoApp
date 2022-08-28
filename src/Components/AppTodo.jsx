import React from 'react';
import AppTodoItem from "./AppTodoItem";
const AppTodo = ({todos}) => {


    return (
        <div className="App-todo">
            <ul className="App-todo__list">
                {todos.map((todo, index) => <AppTodoItem key={index} text={todo.text}/>)}
            </ul>
        </div>
    );
};

export default AppTodo;