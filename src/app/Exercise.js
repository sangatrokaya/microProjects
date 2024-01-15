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
    <button className='btn' onClick={()=> handleChange('inc')}>Increment</button>
    <button className='btn' onClick={()=> handleChange('dec')} disabled = {count === 0}>Decrement</button>
    <button className='btn' onClick={()=> setcount(0)} disabled = {count === 0}>Reset</button>
    </div>
  )
}

export default Exercise