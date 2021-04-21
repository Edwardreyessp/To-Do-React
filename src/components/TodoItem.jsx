import { useState } from "react"


const TodoItem = ({ id, todo, completed, handleChangeCompletedTodo, deleteTodo, editTodo }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editedTodo, setEditedTodo] = useState(todo)


    const handleSaveTodo = () => {
        editTodo(id, editedTodo)
        setIsEditing(false)
    }

    if(isEditing) {
        return (
            <div className="items">
                <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                />
                <i class="far fa-save" onClick={handleSaveTodo}></i>
                <i className="fas fa-ban" onClick={() => setIsEditing(false)}></i>
            </div>
        )
    }


    return (
        <div className="todo">
            <input
                id={`todo-${id}`}
                type="checkbox"
                checked={completed}
                onChange={() => handleChangeCompletedTodo(id)}
            />
            <label htmlFor={`todo-${id}`}>{todo}</label>
            <i className="far fa-edit" onClick={() => setIsEditing(true)}></i>
            <i className="far fa-trash-alt" onClick={() => deleteTodo(id)}></i>
        </div>
    )
}

export default TodoItem