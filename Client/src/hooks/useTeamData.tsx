import { useQueries,UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

// Define the data types for each endpoint
import { TeamInfo, TeamStats, TeamTopPerformers, TeamVideos } from "@/types/Dash/TeamDash";

// Fetch functions
const fetchTeamInfo = async (teamId: string): Promise<TeamInfo> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/teams/${teamId}/info`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team info:", error);
    throw new Error("Failed to fetch team info");
  }
};

const fetchTeamStats = async (teamId: string): Promise<TeamStats> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/teams/${teamId}/stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team stats:", error);
    throw new Error("Failed to fetch team stats");
  }
};

const fetchTeamTopPerformers = async (teamId: string): Promise<TeamTopPerformers> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/teams/${teamId}/top`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team top performers:", error);
    throw new Error("Failed to fetch team top performers");
  }
};

const fetchTeamVideos = async (teamId: string): Promise<TeamVideos> => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${apiUrl}/teams/${teamId}/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team videos:", error);
    throw new Error("Failed to fetch team videos");
  }
};

// Define query options type
interface QueryOptions extends UseQueryOptions<any, Error> {
  queryKey: any[];
  queryFn: () => Promise<any>;
}

const useTeamData = (teamId: string | null) => {
  if (!teamId) {
    return {
      teamData: {
        _id: null,
        teamInfo: null,
        teamStats: null,
        topPerformers: null,
        teamVideos: null,
      },
      isLoading: false,
      isError: false,
      errors: {
        infoError: null,
        statsError: null,
        topError: null,
        videosError: null,
      },
    };
  }

  const queries = useQueries({
    queries: [
      {
        queryKey: ["teamInfo", teamId],
        queryFn: () => fetchTeamInfo(teamId),
        staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // Cache remains in memory for 10 minutes
        refetchOnWindowFocus: false, // Disable refetch on window focus
        onError: (error: Error) => console.error("Error fetching team info:", error),
      } as QueryOptions,
      {
        queryKey: ["teamStats", teamId],
        queryFn: () => fetchTeamStats(teamId),
        staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // Cache remains in memory for 10 minutes
        refetchOnWindowFocus: false, // Disable refetch on window focus
        onError: (error: Error) => console.error("Error fetching team stats:", error),
      } as QueryOptions,
      {
        queryKey: ["teamTopPerformers", teamId],
        queryFn: () => fetchTeamTopPerformers(teamId),
        staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // Cache remains in memory for 10 minutes
        refetchOnWindowFocus: false, // Disable refetch on window focus
        onError: (error: Error) => console.error("Error fetching team top performers:", error),
      } as QueryOptions,
      {
        queryKey: ["teamVideos", teamId],
        queryFn: () => fetchTeamVideos(teamId),
        staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // Cache remains in memory for 10 minutes
        refetchOnWindowFocus: false, // Disable refetch on window focus
        onError: (error: Error) => console.error("Error fetching team videos:", error),
      } as QueryOptions,
    ],
  });

  // Extract individual query results
  const [infoQuery, statsQuery, topQuery, videosQuery] = queries;

  return {
    teamData: {
      _id: teamId,
      teamInfo: infoQuery.data,
      teamStats: statsQuery.data,
      topPerformers: topQuery.data,
      teamVideos: videosQuery.data,
    },
    isLoading: infoQuery.isLoading || statsQuery.isLoading || topQuery.isLoading || videosQuery.isLoading,
    isError: infoQuery.isError || statsQuery.isError || topQuery.isError || videosQuery.isError,
    errors: {
      infoError: infoQuery.error,
      statsError: statsQuery.error,
      topError: topQuery.error,
      videosError: videosQuery.error,
    },
  };
};

export default useTeamData;