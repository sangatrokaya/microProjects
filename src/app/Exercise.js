'use client'
import React, {useState} from 'react'

const Exercise = (probs)=> {
    const [count, setcount] = useState(0)
    const handleChange = (operation)=>{
        setcount(operation === 'inc' ? count+1 : count-1)
    }
  return (
    <div className='division'>
    <h2 className='heading2'>{count}</h2>
    <button onClick={()=> handleChange('inc')}>Increment</button>
    <button onClick={()=> handleChange('dec')}>Decrement</button>
    </div>
  )
}

export default Exercise