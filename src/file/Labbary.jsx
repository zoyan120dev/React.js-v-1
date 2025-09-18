import React from 'react'
import Book from './Book'

function Labbary({books}) {
  return (
    <div>
       <h1>My national Cantrqal Libary</h1>
       <p>address:</p>
       <ul>
        {
            books.map(book => (
                <Book book={book}/>
            ))
        }
       </ul>
    </div>
  )
}

export default Labbary