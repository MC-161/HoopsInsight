import teamService from "../services/teamService.js";

// Method GET all TEAMS
export const getAllTeams = async (req, res) => {
  try {
    const Teams = await teamService.getAllTeams();
    if (!Teams || Teams.length === 0) {
      return res.status(404).json({
        message: "Data Not Found",
        errorCode: "ERR404"
      });
    }
    res.status(200).json(Teams);
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred on the server.",
      errorCode: "ERR500"
    });
  }
}
// Method GET Team by _ID
export const getTeamStats = async(req, res) => {
  try {
    const {id} = req.params;
    const teamStats = await teamService.getTeamStats(id);
    res.status(200).json(teamStats);
    if (!teamStats) {
      res.status(404).json({message: "Data Not Found"})
    }
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred on the server.",
      errorCode: "ERR500"
    });
  }
}
// Method GET Team BIO
export const getTeamBio = async(req, res) => {
  try {
    const {id} = req.params
    const teamBio = await teamService.getTeamBio(id);
    res.status(200).json(teamBio);
    if (!teamBio) {
      return res.status(404).json({
        message: "Data Not Found",
        errorCode: "ERR404"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred on the server.",
      errorCode: "ERR500"
    });
  }
}
// Method GET Team Top Performers
export const getTeamTopPerformers = async(req, res) => {
  try {
    const {id} = req.params
    const topPerformers = await teamService.getTeamTop(id);
    res.status(200).json(topPerformers)
    if (!topPerformers) {
      res.status(404).json({message: "Data Not Found"})
    }
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred on the server.",
      errorCode: "ERR500"
    });
  }
} 
// Method 
// Method GET Team video   
export const getVideos = async(req, res) => {
  try {
    // get id 
    const {id} = req.params
    const teamVideos = await teamService.getTeamVideos(id)
    if (!teamVideos) {
      return res.status(404).json({
        message: "Data Not Found",
        errorCode: "ERR404"
      });
    }
    res.status(200).json(teamVideos);
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred on the server.",
      errorCode: "ERR500"
    });
  }
}
// Method POST Team Video 


