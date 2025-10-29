import { useState } from 'react';

export function ToDoList() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { text: value, id: crypto.randomUUID() };
    setItems([...items, item]);
    setValue('');
  };
  return (
    <div>
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
