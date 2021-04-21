import Formulario from "./components/Formulario"
import TodoItem from "./components/TodoItem.jsx"
import { useEffect, useState } from "react"
import "./App.scss"

const FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed
}

const filterkeys = Object.keys(FILTER_MAP)

const initialState = JSON.parse(localStorage.getItem("todos") || "[]")
const filterInitialState = localStorage.getItem("filter") || "All"

const App = () => {

    const [todos, setTodos] = useState(initialState)
    const [filter, setFilter] = useState(filterInitialState)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        localStorage.setItem("filter", filter)
    }, [filter])

    const handleChangeCompletedTodo = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const editTodo = (id, todop, newDate) => {
        const newTodos = todos.map(todoitem => {
            if(todoitem.id === id) {
                return {...todoitem, todo: todop, date: newDate }
            }
            return todoitem
        })
        setTodos(newTodos)
    }

    return (
        <main>
            <h1>To Do App</h1>
            <p className="subtitle">What needs to be done?</p>
            <p>New task</p>
            <Formulario todos={todos} setTodos={setTodos}/>
            <section id="filters">
                {filterkeys.map(filterKey => (
                    <button key={filterKey} onClick={() => setFilter(filterKey)}>{filterKey} tasks</button>
                ))}
            </section>
            <section id="todo-list">
                {todos.length > 0 ? todos.filter(FILTER_MAP[filter]).map(({ id, todo, completed, date}) => (
                    <TodoItem
                        key={id}
                        id={id}
                        todo={todo}
                        completed={completed}
                        date = {date}
                        handleChangeCompletedTodo={handleChangeCompletedTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )) : (
                    <h3>Empty list</h3>
                )}
            </section>
        </main>
    )
}

export default App
