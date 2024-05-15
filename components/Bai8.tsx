import React, { useState } from 'react'

export default function Bai1() {
    let [number,setNumber] = useState <number>(0)
    const handleChange=()=>{
        setNumber(number++)
    }
  return (
    
    <div>
        <button onClick={handleChange}>click {number} lần</button>
    </div>
  )
}
