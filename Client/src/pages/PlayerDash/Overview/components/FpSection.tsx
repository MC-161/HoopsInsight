import { useState, useEffect } from 'react';
import FantasyPointsCard from '@/pages/PlayerDash/Overview/components/FantasyPtsCard';

const cards = [
  { points: 55, date: '2024/02/08' },
  { points: 55, date: '2024/02/08' },
  { points: 55, date: '2024/02/08' },
  { points: 55, date: '2024/02/08' },
  { points: 55, date: '2024/02/08' },
  { points: 55, date: '2024/02/08' },
  { points: 55, date: '2024/02/08' }
];

export default function CardSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 878);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 878);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="fpp grid grid-cols-3 gap-2 lg:grid-cols-8">
      {cards.slice(0, isMobile ? 3 : cards.length).map((card, index) => (
        <FantasyPointsCard key={index} points={card.points} date={card.date} />
      ))}
    </section>
  );
}
