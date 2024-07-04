import React from 'react'
const TaskList = ({todos, setTodos, setEditTodo}) => {
    /*Marking the todlist as completed */
    const handleComplete = (todo) => {
         setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
         );

    };
    /*Editing the todolist*/
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
    /*Deleting the todolist*/
    const handleDelete= ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
/*Returning all the todolist items in a list */
    return (
        <div>
{todos.map((todo) => (
    <li className="list-item" key={todo.id}>
        <input type="text" value={todo.title} className={`list ${todo.completed ? "complete": ""}`}
         onChange={(event) => event.preventDefault()} />
         <div>
            <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                <i className='fa fa-trash'></i>
            </button>
         </div>
    </li>
))}
        </div>
    )
}
export default TaskList