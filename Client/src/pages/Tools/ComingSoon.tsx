// src/ComingSoon.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ComingSoon: React.FC = () => {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-6">We're working hard to get feature up and running. Stay tuned!</p>
      <div className="flex space-x-4 mb-6">
        <div className="text-center">
          <span className="text-6xl font-bold">{timeLeft.days}</span>
          <div className="text-sm">Days</div>
        </div>
        <div className="text-center">
          <span className="text-6xl font-bold">{timeLeft.hours}</span>
          <div className="text-sm">Hours</div>
        </div>
        <div className="text-center">
          <span className="text-6xl font-bold">{timeLeft.minutes}</span>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="text-center">
          <span className="text-6xl font-bold">{timeLeft.seconds}</span>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Subscribe for Updates</h2>
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          onClick={() => navigate('/')}
        >
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default ComingSoon;
