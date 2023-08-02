import { useState } from "react"
import { addTodo } from "../api"
import { Todo } from "../constans";
interface TodoInputprops{
    updateTodo:(a:Todo)=>void;
}
const TodoInput=({updateTodo}:TodoInputprops)=>{
    const [title,setTitle]=useState<string>('')
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // console.log(title)
        const newTodo={
            title,
            status:false,
        }
        //  for upading DOM after post TODO
        addTodo(newTodo).then((res)=>{
            updateTodo(res)
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e)=>{handleChange(e)}}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoInput