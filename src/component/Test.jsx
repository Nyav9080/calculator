import React, { useState } from 'react'

const Test = () => {
    //  let count = 1;
    const [count,setCount] = useState(0)
     const increaseCount = () => {
    // alert count;
    setCount(count + 1);
}
const decreaseCount = () =>{
    setCount(count - 1);
}

  return (
    <div className='fs-1 d-flex justify-content-center align-item-center vh-100'>
        <button className='btn btn-dark fs-1 mx-5 px-5'>-</button>
        <div>{count}</div>
        <button className='btn btn-dark fs-1 mx-5 px-5' onClick={() => increaseCount()}>+</button>
    </div>
  )
}

export default Test