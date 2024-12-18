import React, { useState, useEffect } from 'react';
import './BooksList.css';

export function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakerapi.it/api/v2/books');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul className='books-list'>
        {books.map((book, index) => (
          <li key={index}>
            <hr />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
