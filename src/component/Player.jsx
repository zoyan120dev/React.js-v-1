import React from 'react'

function Player({name, rouns}) {

  return (
   <>
     <div>
        <h3>Name: {name}</h3>
        <p>Rouns: {rouns}</p>
     </div>
   </>
  )
}

export default Player