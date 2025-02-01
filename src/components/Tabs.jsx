import { useState } from 'react';
import './Tabs.css';

export function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <h2>Tabs</h2>
      <div className='tab-buttons'>
        {tabs.map((tab, index) => (
          <button
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='tab-content'>{tabs[activeTab].content}</div>
    </div>
  );
}
