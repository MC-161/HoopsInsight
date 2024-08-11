import { motion } from 'framer-motion';
import { Player } from '@/types/Search/SearchTypes';
import { useNavigate } from 'react-router-dom';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      key={player._id}
      className="backdrop-blur-md p-10 h-28 border-2 flex items-center justify-center rounded-md transition-all duration-300 hover:cursor-pointer"
      initial={{scale:1}}
      whileHover={{
        scale:1.05,
        transition: { duration: 0.05, ease: "easeInOut" },
      }}
      onClick={() => navigate(`/player-dash?id=${player._id}`)}
    >
      {player.name}
    </motion.div>
  );
};

export default PlayerCard;
