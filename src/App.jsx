import { Tabs } from './components/Tabs';
import './App.css';
import { BooksList } from './components/BooksList';
import { Accordion } from './components/Accordion';
import { Fetch } from './components/Fetch';
import { Profiler } from 'react';
import { Books } from './components/Books';
import { CountUp } from './components/Countdown';

const tabs = [
  { label: 'Tab 1', content: <div>Content of Tab 1</div> },
  { label: 'Tab 2', content: <div>Content of Tab 2</div> },
  { label: 'Tab 3', content: <div>Content of Tab 3</div> },
];

const items = [
  { id: 1, title: 'Tab 1', content: <div>Content of Panel 1</div> },
  { id: 2, title: 'Tab 2', content: <div>Content of Panel 2</div> },
  { id: 3, title: 'Tab 3', content: <div>Content of Panel 3</div> },
];

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // Aggregate or log render timings...
  console.log('id=', id);
  console.log('phase=', phase);
  console.log('actualDuration=', actualDuration);
  console.log('baseDuration=', baseDuration);
  console.log('startTime=', startTime);
  console.log('commitTime=', commitTime);
}

function App() {
  return (
    <Profiler id="Fetch" onRender={onRender}>
      <CountUp />
    </Profiler>
  );
}

export default App;
