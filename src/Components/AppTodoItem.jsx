import React, {useState} from 'react';
import {svgs} from "../svg";

const AppTodoItem = ({todo, remove}) => {

    const [isCheck, setIsCheck] = useState(true);

    return (
        <li  className="App-todo__item item-app-todo">
            <label>
                <input onChange={() => setIsCheck(!isCheck)} type="checkbox" capture={isCheck} className="checkbox"/>
                <span className="fake"></span>
                <div className={isCheck ? "item-app-todo__text" : "item-app-todo__text check"}>
                    {todo.text}
                </div>
            </label>
            <div onClick={() => remove(todo)}>
                {svgs.trash}
            </div>
        </li>
    );
};

export default AppTodoItem;