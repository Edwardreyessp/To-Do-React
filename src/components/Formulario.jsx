import { useState } from "react"
import { nanoid } from "nanoid"

const Formulario = ({ todos, setTodos }) => {

    const [todo, setTodo] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault()
        setTodos([{ id: nanoid(3), todo, completed: false }, ...todos])
        setTodo("")
    }

    return (
        <form className="form" onSubmit={handleSumbit}>
            <input
                placeholder="Write your new task"
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button>Add</button>
        </form>
    )
}

export default Formulario