import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Player, Team } from "@/types/Search/SearchTypes";

// Fetch method
const fetchData = async (type: 'players' | 'teams'): Promise<Player[] | Team[]> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL
    const response = await axios.get(`${apiUrl}/${type}`);
    const reversedData = Array.isArray(response.data) ? response.data.reverse() : response.data;
    return reversedData 
  } catch (error) {
    console.error("Error fetching players:", error);
    throw new Error("Failed to fetch players");
  }
};

const useAll = (type: 'players' | 'teams'): UseQueryResult<Player[] | Team[], Error> => {
  return useQuery<Player[] | Team[], Error>({
    queryKey: [type],
    queryFn: () => fetchData(type),
  });
};

export default useAll;
