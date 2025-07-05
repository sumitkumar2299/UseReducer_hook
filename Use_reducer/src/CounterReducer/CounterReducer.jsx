
import { useState,useReducer} from 'react';
const initialState = 0;

function reducer(state,action){
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return 0;
    }

}

function CounterReducer() {
    // const [count,SetCount] = useState(0);
    // useReducer is a function returning an array. first argument will be the reducer function and second will be the initial state 
    const [count,dispatch] = useReducer(reducer,initialState)

    // function handleIncrement(){
    //     SetCount((count)=>count+1)

    // }
    // function handleDecrement(){
    //     SetCount((count)=>count-1)

    // }

    // function handleReset(){
    //     SetCount(0)

    // }

  return (
   <>
    <h1>count - {count}</h1>
    <button onClick={() =>dispatch('increment')}>Increment</button>
    <button onClick={()=>dispatch ('decrement')}>Decrement</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
   </>
  )
}

export default CounterReducer