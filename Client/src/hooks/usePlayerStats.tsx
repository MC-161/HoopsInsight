import { Player } from "@/types/Dash/PlayerDash";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

// Fetch using axios
const fetchPlayerData = async (playerId: string): Promise<Player> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/players/${playerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player:", error);
    throw new Error("Failed to fetch player");
  }
};

// Custom hook to fetch player data
const usePlayer = (playerId: string): UseQueryResult<Player, Error> => {
  return useQuery<Player, Error>({
    queryKey: ["playerInfo", playerId],
    queryFn: () => fetchPlayerData(playerId),
  });
};

export default usePlayer;
