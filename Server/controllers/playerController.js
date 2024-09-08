import playerService from '../services/playerService.js';
import nbaService from "../services/nbaService.js"

export const getAllPlayers = async (req, res ) => {
  try {
    const players = await playerService.getAllPlayers()
    if (!players || players.length === 0) {
      return res.status(404).json({
        message: "Data Not Found",
        errorCode: "ERR404"
      });
    }
    res.status(200).json(players)
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred on the server.",
      errorCode: "ERR500"
    });
  }
}

export const getPlayer = async (req, res) => {
  try {
    const {id} = req.params
    const playerStats = await playerService.getPlayerById(id)
    const playerImgBio = await nbaService.getPlayerImageBio(id);
    const playerInfo = {playerStats, playerImgBio : playerImgBio.data}
    res.status(200).json(playerInfo)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const fetchGamesPlayed = async (req, res) => {
  try {
    const {id} = req.params
    const playerGames = await nbaService.getPlayerGamesPlayed(id);
    res.status(200).json(playerGames.data)
  } catch (error) {
    return res.status(404).json({
      message: "Data Not Found",
      errorCode: "ERR404"
    });
  }
}


export const fetchNews = async (req, res) => {
  try {
    const {id} = req.params
    const playerNews = await nbaService.getNews(id, false);
    res.status(200).json(playerNews)
  } catch (error) {
    return res.status(404).json({
      message: "Data Not Found",
      errorCode: "ERR404"
    });
  }
}

