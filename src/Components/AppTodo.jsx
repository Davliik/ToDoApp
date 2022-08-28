import React from 'react';
import AppTodoItem from "./AppTodoItem";
//import {useState} from "react";

const AppTodo = ({todos}) => {

    //const [isCheck, setIsCheck] = useState(true)

    

    return (
        <div className="App-todo">
            <ul className="App-todo__list">
                {todos.map((todo, index) => <AppTodoItem key={index} text={todo.text}/>)}
            </ul>
        </div>
    );
};

export default AppTodo;