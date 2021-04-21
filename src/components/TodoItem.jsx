import { useState } from "react"


const TodoItem = ({ id, todo, completed, date, handleChangeCompletedTodo, deleteTodo, editTodo }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editedTodo, setEditedTodo] = useState(todo)
    const date2 = new Date()
    const newDate = `${date2.getMonth() + 1}/${date2.getDate()}/${date2.getFullYear()} ${date2.getHours()}:${date2.getMinutes()}${date2.getHours() >= 12 ? 'pm' : 'am'}`

    const handleSaveTodo = () => {
        editTodo(id, editedTodo, newDate)
        setIsEditing(false)
    }

    if(isEditing) {
        return (
            <>
                <div className="items">
                    <input
                        type="text"
                        value={editedTodo}
                        onChange={(e) => setEditedTodo(e.target.value)}
                    />
                    <i className="far fa-save" onClick={handleSaveTodo}></i>
                    <i className="fas fa-ban" onClick={() => setIsEditing(false)}></i>
                </div>
            </>
        )
    }


    return (
        <>
            <div className="todo">
                <input
                    id={`todo-${id}`}
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleChangeCompletedTodo(id)}
                />
                <label className={`todo-${id}`} htmlFor={`todo-${id}`}>{todo}</label>
                <i className="far fa-edit" onClick={() => setIsEditing(true)}></i>
                <i className="far fa-trash-alt" onClick={() => deleteTodo(id)}></i>
            </div>
            <label htmlFor={`todo-${id}`}>Modified: {date}</label>
        </>
    )
}

export default TodoItem