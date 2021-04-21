import { useState } from "react"
import { nanoid } from "nanoid"

const Formulario = ({ todos, setTodos}) => {

    const [todo, setTodo] = useState("")
    const date = new Date()
    const completeDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}${date.getHours() >= 12 ? 'pm' : 'am'}`

    const handleSumbit = (e) => {
        e.preventDefault()
        setTodos([{ id: nanoid(3), todo, completed: false, date: completeDate }, ...todos])
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