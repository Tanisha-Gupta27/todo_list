import React, { useState } from 'react'

const TodoItem = ({todo,onComplete,onDelete,onEdit}) => {
  const [edit,setEdit]=useState(false);
  const [newText,setNewText]=useState(todo.text);

  const handleEditing=()=>{
    setEdit(true);
  }
  const handleSaveEdit=()=>{
    if(newText.trim()!==""){
      onEdit(todo.id,newText);
      setEdit(false);
    }
  }
  const handleDeleteEdit=()=>{
    setNewText(todo.text)
    setEdit(false);
  }
  const handleEnter=(e)=>{
    if(e.key==='Enter')
      handleSaveEdit();
  }
  return (
   <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    {edit ?
      (
      <>
      <input type='text'
      value={newText}
      onChange={(e)=>setNewText(e.target.value)}
      onKeyDown={handleEnter}
      />
      <button onClick={handleSaveEdit}><i className='fa fa-check' style={{color:'seagreen'}}></i></button>
      <button onClick={handleDeleteEdit}><i className='fa fa-xmark' style={{color:'red'}}></i></button>
      </>
      ) :
      (
      <>
      <div>{todo.text}</div>
      <div>
        <button onClick={()=>onComplete(todo.id)}>{todo.completed?(<i className='fa fa-check-circle' style={{color:'seagreen'}}></i>):(<i className='fa fa-check-circle' style={{color:'grey'}}></i>)}</button>
        <button onClick={handleEditing}><i className='fa fa-edit' style={{color:'#1b50ac'}}></i></button>
        <button onClick={()=>onDelete(todo.id)}><i className='fa fa-circle-xmark' style={{color:'red'}}></i></button>
      </div>
      </>
      )}
    </div>
  )
}

export default TodoItem
