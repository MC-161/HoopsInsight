import playerService from '../services/playerService.js';
import {getPlayerGamesPlayed, getPlayerImageBio} from '../services/nbaService.js';

export const getAllPlayers = async (req, res ) => {
  try {
    const players = await playerService.getAllPlayers()
    if (!players || players.length === 0) {
      return res.status(404).json({ message: 'No players found' });
    }
    res.status(200).json(players)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getPlayer = async (req, res) => {
  try {
    const {id} = req.params
    const playerStats = await playerService.getPlayerById(id)
    const playerImgBio = await getPlayerImageBio(id)
    const BioImage = playerImgBio.data
    const playerInfo = {playerStats, BioImage}
    res.status(200).json(playerInfo)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const fetchGamesPlayed = async (req, res) => {
  try {
    const {id} = req.params
    const playerGames = await getPlayerGamesPlayed(id)
    res.status(200).json(playerGames.data)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}