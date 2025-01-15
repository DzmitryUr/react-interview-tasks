import React, { useState } from 'react';
import './ImageCarousel.css';

export function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='carousel'>
      <h2>Image Carousel</h2>
      <div>
        <img src={images[index]} alt='carousel image' />
      </div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
