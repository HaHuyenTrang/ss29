import React, { useState } from 'react'

export default function Bai4() {
    let [selectoption ,setselectoption] = useState <string>("")
    const handleChange=(event:any)=>{
        setselectoption(event.target.value)
    }
  return (
    <div>
        <p>Tỉnh/ thành phố : {selectoption}</p>
        {/* <input type="" placeholder='---Chọn tỉnh/Thành phố---' onChange={handleChange} value={selectoption} /> */}
        <select value={selectoption} onChange={handleChange}>
            <option value="">---Chọn tỉnh/Thành phố---</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Sơn La">Sơn La</option>
            <option value="Bắc Yên">Bắc Yên</option>
            <option value="Phú Thọ">Phú Thọ</option>
      </select>
    </div>
  )
}
