import { useEffect, useRef, useState } from 'react';

export function CountUp() {
  const [num, setNum] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setNum((prevNum) => prevNum + 1);
    }, 1000);
  };

  const handleClick = () => {
    if (paused) {
      startInterval();
    } else {
      clearInterval(intervalRef.current);
    }
    setPaused((prev) => !prev);
  };
  return (
    <div>
      <h2>Count Up</h2>
      <p>{num}</p>
      <button onClick={handleClick}>{paused ? 'Run' : 'Pause'}</button>
    </div>
  );
}
