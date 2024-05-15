import React, { useState } from 'react'

export default function Bai5() {
    const [valueShown, setValueShown] = useState(false);
    const handleClick = () => {
        setValueShown(!valueShown);
      };
  return (
    <div>
         <button onClick={handleClick}>{valueShown ? 'Hiển' : 'Ẩn'}</button>
    </div>
  )
}
