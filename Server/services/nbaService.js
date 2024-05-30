import axios from "axios";
import { nbaApiKey } from '../config.js';


export const getPlayerImageBio = async (playerId) => {
  const options = {
    method: 'GET',
    url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo',
    params: {
      playerID: `${playerId}`,
      statsToGet: 'averages'
    },
    headers: {
      'X-RapidAPI-Key': `${nbaApiKey}`,
      'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.json()
    const {stats, ...playerImgBio} = data
    return data
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching Bio and Image from API')
  }
}

export const getPlayerGamesPlayed= async(playerId) => {
  const options = {
    method: 'GET',
    url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAGamesForPlayer',
    params: {
      playerID: `${playerId}`,
      season: '2024',
      fantasyPoints: 'true',
    },
    headers: {
      'X-RapidAPI-Key': 'c3fb093a86mshbd0ee4dca6b6d7cp146aa9jsn9d452d08c083',
      'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.json()
    return data
  } catch (error) {
    throw new Error('Error fetching Player Games')
  }
}

