import React, { useState } from 'react'

export default function Function() {
    const [name,setName]= useState <string>("Trang")
    /*
        Event: sự kiện
        onclick
        onchange
        onkeydown
        onkeyup
        ......
    */ 
//    nơi khai báo các hàm
// dùng các từ khóa khai báo
const handleChange=()=>{
    console.log("call");
// khi muốn cập nhật tên
setName("Dương")     
}
  return (
    <div>Function
        <p>{name}</p>
        <button onClick={handleChange}>click</button>
    </div>
  )
}
