import  { useReducer, useState } from 'react'
import Task from './Task'
const initialTask = [];
function reducer(state,action){
    switch(action.type){
        case 'add-task':
            return [...state,createNewTask(action.payload.name)];
        case 'toogle-task':
            return state.map(task =>{
                if(task.id === action.payload.id){
                    return {...task,complete:!task.complete}
                }
                return task;
            })
        case 'delete-task':
            return state.filter(task=>task.id!==action.payload.id);
        default:
            return state;
    }
}
function createNewTask(name){
    return {id:Date.now(),name:name,complete:false}
}

function Tasklist() {
    const [state,dispatch] = useReducer(reducer,initialTask);
    const [taskName,setTaskName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:'add-task',payload:{name:taskName}})
        setTaskName("");
    }
    console.log(state)
  return (
    <>
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='task-list'>Add Task</label>
        <input type="text" id='task-input' placeholder='Enter your task' value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
        <button>Add</button>
    </form>
    <div>
        {state.map((task)=>  <Task task = {task} key = {task.id} dispatch = {dispatch}/>)}
    </div>
    </>
  )
}

export default Tasklist