import React from 'react';
import plus from "../Add_Plus.svg";

const AppHeader = () => {
    return (
        <div className="App-header">
            <div className="App-header__title">
                <h1>To Do App</h1>
            </div>
            <form className="add-todo">
                <input placeholder="Что будем делать?" type="text"/>
                <button>
                    <img src={plus} alt=""/>
                </button>
            </form>
        </div>
    );
};

export default AppHeader;