import React, {useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

        useEffect( ()=>{
            fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(1,8)))
            },[])
      return (
        <div>
          <BookCards books={books} headLine="Other Book" />
    
        </div>
      )
}

export default OtherBooks
