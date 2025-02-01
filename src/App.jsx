import { Tabs } from './components/Tabs';
import './App.css';

const tabs = [
  { label: 'Tab 1', content: <div>Content of Tab 1</div> },
  { label: 'Tab 2', content: <div>Content of Tab 2</div> },
  { label: 'Tab 3', content: <div>Content of Tab 3</div> },
];

function App() {
  return (
    <>
      <h1>React Interview Challenges</h1>
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;
