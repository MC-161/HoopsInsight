import Team from "../models/teamModel.js";

const teamService = {
  getAllTeams: async () => {
    try {
      const teams = await Team.find().select('name _id').lean();
      return teams
    } catch (error) {
      throw new Error("Error Retrieving players" + error.message);
    }
  },
  getTeamStats: async (id) => {
    try {
      const teamStats = await Team.findById(id).select('stats').lean();
      return teamStats
    } catch (error) {
      throw new Error("Error Retrieving players" + error.message);
    }
  },
  getTeamTop: async (id) => {
    try {
      const topPerformers = await Team.findById(id).select('topPerformers').lean()
      return topPerformers
    } catch (error) {
      throw new Error("Error Retrieving players" + error.message);
    }
  },
  getTeamVideos: async (id) => {
    try {
      const teamVideos = await Team.findById(id).select("videos").lean()
      return teamVideos
    } catch (error) {
      throw new Error("Error Retrieving players" + error.message);
    }
  },
  getTeamBio : async (id) => {
    try {
      const teamBio = Team.findById(id).select('name logo conference').lean();
      return teamBio;
    } catch (error) {
      throw new Error("Error Retrieving players" + error.message);
    }
  },
}

export default teamService;