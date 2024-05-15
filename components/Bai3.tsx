import React, { useState } from 'react'

export default function Bai3() {
    let [ipvalue,setIpvalue] = useState <string>("")
    const handleChange=(event:any)=>{
        setIpvalue(event.target.value)
    }
  return (
    <div>
        <p>Thời gian: {ipvalue}</p>
        <input type="date" placeholder='mm/dd/yyyy' onChange={handleChange} value={ipvalue} />
    </div>
  )
}
