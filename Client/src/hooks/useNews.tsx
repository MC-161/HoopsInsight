import { NBAResponse } from "@/types/Dash/PlayerDash";
import { useQuery, UseQueryResult, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

// Fetch using axios
const fetchPlayerNews = async (playerId: string): Promise<NBAResponse> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/players/${playerId}/news`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Failed to fetch news");
  }
};

// Custom hook to fetch team data
const useNews = (playerId: string): UseQueryResult<NBAResponse, Error> => {
  return useQuery<NBAResponse, Error>({
    queryKey: ["playerNews", playerId],
    queryFn: () => fetchPlayerNews(playerId),
    staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Data remains in cache for 10 minutes
    refetchOnWindowFocus: false, // Disable refetch on window focus
    refetchOnReconnect: false, // Disable refetch on reconnect
    refetchOnMount: false, // Disable refetch on mount
    onError: (error: Error) => {
      console.error("Error fetching news:", error);
    },
  } as UseQueryOptions<NBAResponse, Error>);
};

export default useNews;
