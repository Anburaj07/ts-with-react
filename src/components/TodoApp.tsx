import { useEffect, useState } from "react"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { Todo } from "../constans"
import { deleteTodo, getTodo, toggleTodo } from "../api"

const TodoApp=()=>{
    const[todos,setTodos]=useState<Todo[]>([]);
    useEffect(()=>{
        getTodo().then((res)=>{
            setTodos(res);
        })
    },[]);

    // for updataing DOM
    const updateTodo=(newTodo:Todo)=>{
        setTodos((prev)=>{
            return [...prev,newTodo];
        })
    }

    const handleToggle=(id:number,status:boolean)=>{
        toggleTodo(id,status).then((res)=>{
            setTodos((prev)=>{return prev.map((el)=>(el.id===id ? res:el))})
        })
    }
    const handleDelete=(id:number)=>{
        deleteTodo(id).then((res)=>{
            setTodos((prev)=>{return prev.filter((el)=>el.id!==id)})
        })
    }

    return(
        <div>
            <TodoInput updateTodo={updateTodo}/>  
            {todos.map((el)=>(
                <TodoItem key={el.id} {...el} handleToggle={handleToggle} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

export default TodoApp