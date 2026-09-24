import { useState } from 'react'

export const Cups = () => {
  const [num, setnum] = useState(0);

  return (
    <div>
        <h2>cups ordered: {num}</h2>
        <button onClick={()=>{
            setnum(num+1);
        }}>cups</button>
    </div>
  )
}