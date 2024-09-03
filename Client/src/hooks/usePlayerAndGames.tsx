import { PlayerData, PlayerGameData } from "@/types/Dash/PlayerDash";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch player data function (already provided)
const fetchPlayerData = async (playerId: string): Promise<PlayerData> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    console.log(`${apiUrl}/players/${playerId}`)
    const response = await axios.get(`${apiUrl}/players/${playerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player:", error);
    throw new Error("Failed to fetch player");
  }
};

// Fetch game data function (newly added)
const fetchGameData = async (playerId: string): Promise<PlayerGameData[]> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/players/${playerId}/gamesPlayed`);
    return response.data.body;
  } catch (error) {
    console.error("Error fetching game data:", error);
    return []
  }
};

// Custom hook to fetch both player and game data
const usePlayerAndGame = (playerId: string | null) => {
  if (!playerId) {
    return {
      playerData: undefined,
      gameData: undefined,
      loading: false,
      error: new Error("Invalid player ID"),
    };
  }

  const playerQuery = useQuery<PlayerData, Error>({
    queryKey: ["playerInfo", playerId],
    queryFn: () => fetchPlayerData(playerId),
    enabled: !!playerId,
    staleTime: 0, // Example: Data is considered stale immediately
    cacheTime: 2 * 60 * 1000, // Cache data for 5 minutes
  } as any); // Workaround for TypeScript typing issues

  const gameQuery = useQuery<PlayerGameData[], Error>({
    queryKey: ["gameInfo", playerId],
    queryFn: () => fetchGameData(playerId),
    enabled: !!playerId,
    staleTime: 0,
    cacheTime: 2 * 60 * 1000 as number, // Cast to number if needed
  } as any); // Cast to any if the typing issue persists

  return {
    playerData: playerQuery.data,
    gameData: gameQuery.data,
    loading: playerQuery.isLoading || gameQuery.isLoading,
    error: playerQuery.error || gameQuery.error,
  };
};

export default usePlayerAndGame;
