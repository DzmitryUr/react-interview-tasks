import { ImageCarousel } from './components/ImageCarousel';
import './App.css';

const images = [
  'https://picsum.photos/id/10/600/400',
  'https://picsum.photos/id/11/600/400',
  'https://picsum.photos/id/12/600/400',
  'https://picsum.photos/id/13/600/400',
  'https://picsum.photos/id/15/600/400',
];

function App() {
  return (
    <>
      <h1>React Interview Challenges</h1>
      <ImageCarousel images={images} />
    </>
  );
}

export default App;
