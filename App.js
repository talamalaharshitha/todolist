import React, {useState, useEffect} from 'react'
import HeaderFile from "./components/HeaderFile";
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App=()=> {
  /*Saving tasks to local storage */
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] =useState(initialState);
  const [editTodo, setEditTodo] =useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  })
  
 
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <HeaderFile />
        </div>
        <div>
        <TaskInput
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />

      </div>
      <div>
        <TaskList  todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
      </div>
      
      
    </div>
  );
}

export default App;
