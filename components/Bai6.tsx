import React, { useState } from 'react'

export default function Bai6() {
    let [name,setName] = useState <string>("Hiện")
    const handleChange=()=>{
        setName((prevName) => (prevName === 'Hiện' ? 'Ẩn' : 'Hiện'))
        
    }
  return (
    
    <div>
        {/* <p>click me</p> */}
        <button onClick={handleChange}>{name}</button>
    </div>
  )
}