import React from 'react';
import AppHeaderForm from "./AppHeaderForm";

const AppHeader = ({todos, setTodos}) => {
    return (
        <div className="App-header">
            <div className="App-header__title">
                <h1>To Do App</h1>
            </div>
           <AppHeaderForm todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default AppHeader;