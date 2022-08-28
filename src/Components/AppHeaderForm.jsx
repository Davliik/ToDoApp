import React, {useEffect, useState} from 'react';
import plus from "../Add_Plus.svg";

const AppHeaderForm = ({todos, setTodos}) => {

    const [todoText, setTodoText] = useState('')

    useEffect((() => {
        localStorage.setItem('Todos', JSON.stringify(todos));
    }), [todos])

    const addTodos = (e) => {

        e.preventDefault()

        if (!todoText) {
            alert("иди на хуй")
        } else {
            const newTodo = {text: todoText}
            setTodos([...todos, newTodo])
            setTodoText('')
        }

    }

    return (
        <form className="add-todo">
            <input onChange={(e) => setTodoText(e.target.value)} value={todoText} placeholder="Что будем делать?"
                   type="text"/>
            <button onClick={addTodos}>
                <img src={plus} alt=""/>
            </button>
        </form>
    );
};

export default AppHeaderForm;