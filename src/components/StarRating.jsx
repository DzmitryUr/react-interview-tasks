import { useState } from 'react';

export function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Star Rating</h2>
      {[...Array(totalStars)].map((_, i) => {
        const starValue = i + 1;

        return (
          <span
            key={starValue}
            style={{
              color: starValue <= rating ? 'gold' : 'gray',
              fontSize: '3rem',
              cursor: 'pointer',
            }}
            onClick={() => setRating(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
