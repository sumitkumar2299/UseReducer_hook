import React from 'react'

function Task({task,dispatch}) {
    console.log(task)
  return (
    <>
    <div>
        <span className={`task-name ${task.complete?'complete':''}`}>{task.name}</span>
        <button onClick={()=>dispatch({type:'toogle-task',payload:{id:task.id}})}>{task.complete?'undo':'complete'}</button>
        <button onClick={()=>dispatch({type:'delete-task',payload:{id:task.id}})}>Delete</button>
    </div>
    </>
  )
}

export default Task