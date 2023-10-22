import React,{useState} from 'react'
import TodoItem from './TodoItem';

const TodoApp = () => {
    const[input,setInput]=useState("");
    const[todos,setTodos]=useState([]);

    const addTodo=()=>{
      if(input.trim() !== ''){
        const newTodo={
          id:Date.now(),
          text:input,
          completed:false
        }
        setTodos((prevTodo)=>[...prevTodo,newTodo]);
        setInput('');
      }
    }
    const handleEnter=(e)=>{
      if(e.key==="Enter")
      addTodo();
    }
    const handleComplete=(id)=>{
      setTodos((prevTodo)=>
      prevTodo.map((todo)=>
      todo.id===id?{...todo,completed:!todo.completed}:todo
      ))
    }
    const handleDelete=(id)=>{
      setTodos((prevTodo)=>
      prevTodo.filter((todo)=>
      todo.id!==id
      ))
    }
    const handleEdit=(id,newText)=>{
      setTodos((prevTodo)=>
      prevTodo.map((todo)=>
      todo.id===id?{...todo,text:newText}:todo))
    }
  return (
    <div className='todo-list'>
        <div className='add-todo'>
            <input
                type='text'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder='Enter a todo...'
                onKeyDown={handleEnter}
            />
            <button onClick={addTodo}>Add</button>
        </div>
        {todos.map((todo)=>
        <TodoItem
        key={todo.id}
        todo={todo}
        onComplete={handleComplete}
        onDelete={handleDelete}
        onEdit={handleEdit}
        />
        )}
      </div>
      
  )
}

export default TodoApp
