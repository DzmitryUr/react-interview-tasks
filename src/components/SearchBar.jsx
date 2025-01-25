import { useState } from 'react';
import './SearchBar.css';

export function SearchBar({ items }) {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className='search-bar'>
      <h2>Search Bar</h2>
      <input
        type='text'
        placeholder='Search..'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
