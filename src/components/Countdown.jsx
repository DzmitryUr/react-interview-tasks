import { useEffect, useState } from 'react';
import './CountDown.css';

/**
 * Calculates the time remaining until January 1, 2026 00:00:00
 * @returns Object containing days, hours, minutes, seconds, and total milliseconds
 */
function calculateTimeLeft() {
  const newYear = new Date('2026-01-01T00:00:00').getTime();
  const now = new Date().getTime();
  const difference = newYear - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    total: difference,
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h1 className="title">Countdown</h1>
      <div className="countdown-grid">
        <div className="time-box">
          <span className="time-value">{timeLeft.days}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.hours}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.minutes}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.seconds}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
}
