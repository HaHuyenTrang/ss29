import React, { useState } from 'react'

export default function Bai1() {
    let [name,setName] = useState <string>("click me")
    const handleChange=()=>{
        console.log("Clicked");
    }
  return (
    
    <div>
        <p>click me</p>
        <button onClick={handleChange}>click</button>
    </div>
  )
}
