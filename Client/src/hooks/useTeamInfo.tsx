import { TeamInfo } from "@/types/Dash/PlayerDash";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

// Fetch using axios
const fetchTeamInfo = async (teamId: string): Promise<TeamInfo> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/teams/${teamId}/info`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player:", error);
    throw new Error("Failed to fetch player");
  }
};

// Custom hook to fetch player data
const useTeamInfo = (teamId: string): UseQueryResult<TeamInfo, Error> => {
  return useQuery<TeamInfo, Error>({
    queryKey: ["teamInfo", teamId],
    queryFn: () => fetchTeamInfo(teamId),
  });
};

export default useTeamInfo;
