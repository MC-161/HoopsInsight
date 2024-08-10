import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Player } from "@/types/Search/SearchTypes";

// Fetch method
const fetchPlayers = async (): Promise<Player[]> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL
    const response = await axios.get(`${apiUrl}/players`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching players:", error);
    throw new Error("Failed to fetch players");
  }
};

// React Query Hook
const useAllPlayers = (): UseQueryResult<Player[], Error> => {
  return useQuery<Player[], Error>({
    queryKey: ['players'],
    queryFn: fetchPlayers,
    // Consider adding options like staleTime, cacheTime, etc.
  });
};

export default useAllPlayers;
