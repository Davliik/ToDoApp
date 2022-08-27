import './App.css';
import AppHeader from "./Components/AppHeader";
import AppTodo from "./Components/AppTodo";
import React, {useState} from "react";

const App = () => {

    const [todos, setTodos] = useState([{
        text: "asfsdfsdfsdfsdf"
    }])

    return (
        <div className="App">
            <div className="App__container">
                <AppHeader setTodos={setTodos}/>
                <div className="separator"/>
                <AppTodo todos={todos}/>
            </div>
        </div>);
}

export default App;
