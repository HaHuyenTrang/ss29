import React, { useState } from 'react'

export default function Bai2() {
    let [ipvalue,setIpvalue] = useState <string>("")
    const handleChange=(event:any)=>{
        setIpvalue(event.target.value)
    }
  return (
    
    <div>
        <p>Dữ liệu người dùng nhập: {ipvalue}</p>
        <input type="text" placeholder='Nhập dữ liệu' onChange={handleChange} value={ipvalue}/>
        {/* <input onClick={handleChange}>click</input> */}

    </div>
  )
}
