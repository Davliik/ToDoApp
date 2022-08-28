import React, {useState} from 'react';

const AppTodoItem = ({text}) => {

    const [isCheck, setIsCheck] = useState(true);

    return (
        <li  className="App-todo__item item-app-todo">
            <label>
                <input onChange={() => setIsCheck(!isCheck)} type="checkbox" capture={isCheck} className="checkbox"/>
                <span className="fake"></span>
                <div className={isCheck ? "item-app-todo__text" : "item-app-todo__text check"}>
                    {text}
                </div>
            </label>
        </li>
    );
};

export default AppTodoItem;