import { SearchBar } from './components/SearchBar';
import './App.css';

const items = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'Angular',
  'Vue',
  'Svelte',
  'NodeJS',
  'NextJS',
];

function App() {
  return (
    <>
      <h1>React Interview Challenges</h1>
      <SearchBar items={items} />
    </>
  );
}

export default App;
