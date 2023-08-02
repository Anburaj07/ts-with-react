import { Todo } from "../constans"

interface TodoItemprops extends Todo{
    handleDelete:(a:number)=>void;
    handleToggle:(a:number,b:boolean)=>void;
}

const TodoItem=({id,title,status,handleDelete,handleToggle}:TodoItemprops)=>{    
    return(
        <div>
            <h3> Title : {title} - Status : {status? "True": "False"} </h3>
            <button onClick={()=>handleToggle(id,status)}>Toggle</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
}

export default TodoItem