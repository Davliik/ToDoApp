import React, {useState} from 'react';

const AppTodoItem = ({text}) => {

    const [isCheck, setIsCheck] = useState(true)

    const toggleCheck = () => {
      if (isCheck) {
          setIsCheck(false)
      } else {
          setIsCheck(true)
      }
    }

    return (
        <li onClick={toggleCheck}  className="App-todo__item item-app-todo">
            <label >
                <input type="checkbox" className="checkbox"/>
                <span className="fake"></span>
                <div className={isCheck ? "item-app-todo__text" : "item-app-todo__text check"}>
                    {text}
                </div>
            </label>
        </li>
    );
};

export default AppTodoItem;