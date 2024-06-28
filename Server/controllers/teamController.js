import teamService from "../services/teamService.js";

// Method GET all TEAMS
export const getAllTeams = async (req, res) => {
  try {
    const Teams = await teamService.getAllTeams();
    res.status(200).json(Teams);
    if (!Teams) {
      res.status(404).json({message: "Data Not Found"})
    }
  } catch (error) {
    res.status(500).json({message: error.message});
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
    res.status(500).json({message: error.message});
  }
}
// Method GET Team BIO
export const getTeamBio = async(req, res) => {
  try {
    const {id} = req.params
    const teamBio = await teamService.getTeamBio(id);
    res.status(200).json(teamBio);
    if (!teamBio) {
      res.status(404).json({message: "Data Not Found"})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
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
    res.status(500).json({message: error.message})
  }
} 
// Method 
// Method GET Team video   
export const getVideos = async(req, res) => {
  try {
    // get id 
    const {id} = req.params
    const teamVideos = await Team.findById(id).select("videos").lean()
    res.status(200).json(teamVideos)
    if (!teamVideos) {
      res.status(404).json({message: error.message})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
// Method POST Team Video 


