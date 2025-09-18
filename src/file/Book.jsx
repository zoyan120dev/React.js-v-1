import React from 'react'

function Book({book}) {
  return  <li>Name:{book.name} price:{book.price} </li>
}

export default Book