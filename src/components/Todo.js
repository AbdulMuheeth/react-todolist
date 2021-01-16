import React,{useState} from 'react'
import TodoList from './TodoList'
import TodoForm from "./TodoForm";
import { RiCloseCircleLine} from "react-icons/ri";
import { TiEdit  } from "react-icons/ti";

function Todo(props) {

    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

    const submitUpdate = value => {
        props.updateTodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })

    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return props.todos.map((todo,index) => (
        <div className='d-flex justify-content-around my-3' style={{fontSize:'1.5rem'}} key={index}>

            <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
                {todo.text}
            </div>
            
            <div className="icons ">
                <RiCloseCircleLine onClick={() => props.removeTodo(todo.id)} className="text-danger"  />
                <TiEdit className="text-white"  onClick={() => setEdit({id:todo.id, value:todo.text})}/>
            </div>
        </div>
    ))
}

export default Todo
