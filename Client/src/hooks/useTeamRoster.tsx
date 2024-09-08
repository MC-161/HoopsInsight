import { TeamRoster } from "@/types/Dash/TeamDash";
import { useQuery, UseQueryResult, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

// Fetch using axios
const fetchTeamRoster = async (teamId: string): Promise<TeamRoster> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/teams/${teamId}/roster`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team roster:", error);
    throw new Error("Failed to fetch team roster");
  }
};

// Custom hook to fetch team data
const useTeamRoster = (teamId: string): UseQueryResult<TeamRoster, Error> => {
  return useQuery<TeamRoster, Error>({
    queryKey: ["teamRoster", teamId],
    queryFn: () => fetchTeamRoster(teamId),
    staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Data remains in cache for 10 minutes
    refetchOnWindowFocus: false, // Disable refetch on window focus
    refetchOnReconnect: false, // Disable refetch on reconnect
    refetchOnMount: false, // Disable refetch on mount
    onError: (error: Error) => {
      console.error("Error fetching team roster:", error);
    },
  } as UseQueryOptions<TeamRoster, Error>);
};

export default useTeamRoster;
