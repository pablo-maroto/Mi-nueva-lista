import React, { useState } from "react";
import Todo from './Todo'

const Form = () =>{
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})

    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }
    
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return(
        <>
            <form onSubmit={e => e.preventDefault()}>
                <div className="Agrega-tareas">
                <label>Agrega tus tareas aquí</label><br />
                </div>
                <input className="Input" type='text' name='todo' onChange={handleChange} />
                <button onClick={handleClick}>Agregar</button>
            </form>

                {
                    todos.map((value, index) => (
                        <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
                     ))
            }
        </>
    );
};

export default Form;