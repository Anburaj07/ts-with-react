import axios from "axios";
import { NewTodo } from "./constans";

const URL="http://localhost:8080/todos"
export const addTodo= async(newTodo:NewTodo)=>{
    let res = await axios.post(URL,newTodo);
    return res.data;
}

export const getTodo=async()=>{
    let res=await axios.get(URL);
    return res.data;
}

export const toggleTodo= async(id:number,status:boolean)=>{
    let res=await axios.patch(`${URL}/${id}`,{status:!status})
    return res.data
}

export const deleteTodo=async(id:number)=>{
    let res=await axios.delete(`${URL}/${id}`);
    return res.data
}