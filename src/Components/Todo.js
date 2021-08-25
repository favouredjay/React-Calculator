import React, {useState} from 'react'
import TodoForm from  './TodoForm'
// import {RiCloseCircleLine} from 'react_icons/ri'
// import {TiEdit} from 'react_icons/ti';

function Todo({todos, completeTodo}) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })
    return todos.map((todo, index)=>(
    <div className = {todo.isComplete ? 'todo-row complete' :
     'todo-row'} key = {index}>

         <div key = {todo.id} onClick ={() => completeTodo(todo.id)}>
             {todo.text}
         </div>
         <div className = "ïcons">
             {/* <RiCloseCircleLine/>
             <TiEdit/> */}
         </div>

         </div>
    ))
}

export default Todo
