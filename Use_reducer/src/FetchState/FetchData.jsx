import React, { useState } from 'react'

// LOADING
// post 
// error
function FetchData() {
    const [loading,setLoading] = useState(false)
    const [posts, setPosts] = useState([]);
    const [error,setError] = useState(false)
    function handleFetch(){
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data =>{
            console.log(data),
            setPosts(data)
            setLoading(false)
        }
        ))
        .catch((err)=>console.log(error))

    }
  return (
    <>
    <div>
        <button onClick={handleFetch}>{loading?'Loading....':'Fetch Post'}</button>
         {error && <span style={{ color: 'red' }}>Something went wrong</span>}
      {posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <img src={post.image} alt={post.title} width={100} />
          <h3>{post.title}</h3>
          <p>{post.price}/-</p>
          <button>Buy Now</button>
        </div>
      ))}
       
    </div>

    </>
  )
}

export default FetchData