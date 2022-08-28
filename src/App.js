import './App.css';
import AppHeader from "./Components/AppHeader";
import AppTodo from "./Components/AppTodo";
import React, {useState} from "react";

const App = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Todos")) || [])
    localStorage.setItem('Todos', JSON.stringify(todos));

    const removeTodo = (todo) => {
        setTodos(todos.filter(p => p.id !== todo.id))
    }


    return (
        <div className="App">
            <div className="App__container">
                <AppHeader todos={todos} setTodos={setTodos}/>
                <div className="separator"/>
                <AppTodo remove={removeTodo} todos={todos}/>
            </div>
        </div>);
}

export default App;
