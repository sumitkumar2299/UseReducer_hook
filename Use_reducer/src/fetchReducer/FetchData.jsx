import React, { useReducer, } from 'react'

// LOADING
// post 
// error

const initialState = {
  loading:false,
  posts:[],
  error:false
}
function FetchData() {
  const [state,dispatch] = useReducer(reducer,initialState)
  function reducer(state,action){
    switch(action.type){
      case 'fetch-start':
        return {
          ...state,
          loading:true,
          // posts:[],
          // error:false

          // posts or error initial state se same hai isliye hum sirf loading ko update karenge by using spread operator 
        }
      case 'fetch-success':
        return {
          ...state,
           posts:action.payload,
          // loading:false,
          // error:false
        }
      case 'fetch-error':
        return {
          ...state,
          // loading:false,
          // post:[],
          error:true
        }  
      default:
        return state;
    }


  }
    
    function handleFetch(){
      dispatch({type:'fetch-start'})
        
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data =>{
          dispatch({type:'fetch-success',payload:data})
          
        }
        ))
        .catch((err)=>{
          dispatch({type:'fetch-error'})

        })

    }
  return (
    <>
    <div>
        <button onClick={handleFetch}>{state.loading?'Loading....':'Fetch Post'}</button>
         {state.error && <span style={{ color: 'red' }}>Something went wrong</span>}
      {state.posts.map((posts) => (
        <div key={posts.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <img src={posts.image} alt={posts.title} width={100} />
          <h3>{posts.title}</h3>
          <p>{posts.price}/-</p>
          <button>Buy Now</button>
        </div>
      ))}
       
    </div>

    </>
  )
}

export default FetchData