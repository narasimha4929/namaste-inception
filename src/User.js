import React, { useState } from 'react'

const User = ({name}) => {
    const [count,setcount] = useState(0)
  return (
    <div className='user-card'>
        <h1>count :{count}</h1>
        <button onClick={()=>(setcount(count+1))}>count</button>
        <h1>Name:{name}</h1>
        <h2>Location:Dehradun</h2>
        </div>
  )
}

export default User