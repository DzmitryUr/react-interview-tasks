import { useState } from 'react';
import './Accordion.css';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  console.log('Accordion items:', items);

  return (
    <div>
      {items.map((item, index) => (
        <div className="panel" key={item.id}>
          <h3 className="title" onClick={() => setActiveIndex(item.id)}>
            {item.title}
          </h3>
          <div>{activeIndex === item.id ? item.content : ''}</div>
        </div>
      ))}
    </div>
  );
};
