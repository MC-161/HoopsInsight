import { useState, useEffect } from 'react';
import FantasyPointsCard from '@/pages/PlayerDash/Overview/components/FantasyPtsCard';
import { PlayerGameData } from '@/types/Dash/PlayerDash';
import formatDate from '@/pages/utils/DateFormatter';


interface CardSectionProps{
  playerGameData: PlayerGameData
}

const CardSection:React.FC<CardSectionProps> = ({playerGameData}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 878);
  
  // Convert dummyData to an array of objects with fantasy points and game date
  const cards = Object.keys(playerGameData).map(gameID => ({
    points: playerGameData[gameID].fantasyPoints,
    date: formatDate(gameID.split('_')[0])
  }));


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 878);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Limit the number of games to a maximum of 8
  const maxGamesToShow = Math.min(cards.length, 7);
  const visibleGames = cards.slice(0, maxGamesToShow);

  return (
    <section className="fpp grid grid-cols-3 gap-2 lg:grid-cols-8">
      {visibleGames.slice(0, isMobile ? 3 : cards.length).map((card, index) => (
        <FantasyPointsCard key={index} pts={card.points} date={card.date} />
      ))}
    </section>
  );
}

export default CardSection;