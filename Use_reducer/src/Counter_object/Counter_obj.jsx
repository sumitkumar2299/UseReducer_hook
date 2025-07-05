
import { useState,useReducer} from 'react';
const initialState = {
    counter:0,
    counter1:5
};
// reducer function do argument rakhta hai ek state aur ek action 
function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {counter:state.counter+action.payload};
        case 'decrement':
            return {counter:state.counter-action.payload};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Counter_obj() {
    
    // useReducer is a function returning an array. first argument will be the reducer function and second will be the initial state 
    const [count,dispatch] = useReducer(reducer,initialState)


  return (
   <>
    <h1>count - {count.counter}</h1>
    <h1>count - {count.counter1}</h1>
    <button onClick={() =>dispatch({type:'increment',payload:1})}>Increment</button>
    <button onClick={() =>dispatch({type:'increment',payload:5})}>Increment</button>
    <button onClick={()=>dispatch ({type:'decrement',payload:1})}>Decrement</button>
     <button onClick={()=>dispatch ({type:'decrement',payload:5})}>Decrement</button>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
   </>
  )
}

export default Counter_obj