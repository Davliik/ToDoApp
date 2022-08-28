import React, {useEffect, useState} from 'react';
import {svgs} from "../svg";

const AppHeaderForm = ({todos, setTodos}) => {

    const [todoText, setTodoText] = useState('')

    useEffect(()=> {
        localStorage.setItem('Todos', JSON.stringify(todos));
    }, [todos])

    const addTodos = (e) => {
        e.preventDefault()
        if (!todoText) {
            alert("иди на хуй")
        } else {
            const newTodo = {text: todoText, id: Date.now()}
            setTodos([...todos, newTodo])
            setTodoText('')
            console.log([...todos, newTodo])
        }

    }

    return (
        <form className="add-todo">
            <input onChange={(e) => setTodoText(e.target.value)} value={todoText} placeholder="Что будем делать?"
                   type="text"/>
            <button onClick={addTodos}>
                {svgs.addPlus}
            </button>
        </form>
    );
};

export default AppHeaderForm;