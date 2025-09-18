import React, { useState } from 'react'


function UseSate() {
  
 const [count, setCount] = useState(0)

 const HandleAdd = () => {
    const newCOunt = count + 1;
    setCount(newCOunt)
 }

    const counterStyle = {
       border:'2px solid yellow',
       padding:'10px',
       backroundColor:'black',
       width:'200px'
    }
  return (
   <div style={counterStyle}>
       <h3>Count: {count}</h3>
       <button onClick={HandleAdd}>Add</button>
   </div>
  )
}

export default UseSate