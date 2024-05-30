import Player from "../models/playerModel"
import nbaService from '../services/nbaService.js';

const getAllPlayers = async (res, req) => {
  try {
    const players = Player.find().select('name _id')
    res.status(200).json(players)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const getPlayer = async (res, req) => {
  try {
    const {id} = req.params
    const playerStats = await Player.findById(id)
    const playerImgBio = await nbaService.getPlayerImageBio(id)
    const playerInfo = {playerStats, playerImgBio}
    res.status(200).json(playerInfo)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

const fetchGamesPlayed = async (res, req) => {
  try {
    const {id} = req.params
    const playerGames = await nbaService.getPlayerImageBio(id)
    res.status(200).json(playerGames)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}