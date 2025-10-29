import { useEffect, useState } from 'react';
import './BooksList.css';

export function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakerapi.it/api/v2/books');
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setBooks(json.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Books List</h2>
      <ul className="books-list">
        {books.map(({ id, title, author, genre }) => (
          <li key={id}>
            <hr />
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
