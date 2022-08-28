import './App.css';
import AppHeader from "./Components/AppHeader";
import AppTodo from "./Components/AppTodo";
import React, {useEffect, useState} from "react";

const App = () => {

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("Todos")))
    }, [])

    const [todos, setTodos] = useState([{
        text: "asfsdfsdfsdfsdf"
    }])
    localStorage.setItem('Todos', JSON.stringify(todos));

    return (
        <div className="App">
            <div className="App__container">
                <AppHeader todos={todos} setTodos={setTodos}/>
                <div className="separator"/>
                <AppTodo todos={todos}/>
            </div>
        </div>);
}

export default App;
