import axios from "axios";
import config from '../config.mjs'

const nbaService = {
  getPlayerImageBio : async (playerId) => {
    const options = {
      method: 'GET',
      url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo',
      params: {
        playerID: `${playerId}`,
        statsToGet: 'averages'
      },
      headers: {
        'X-RapidAPI-Key': `${config.nbaApiKey}`,
        'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      const {stats, ...playerImgBio} = response
      return response
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching Bio and Image from API')
    }
  },
  
  getPlayerGamesPlayed : async(playerId) => {
    const options = {
      method: 'GET',
      url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAGamesForPlayer',
      params: {
        playerID: `${playerId}`,
        season: '2024',
        fantasyPoints: 'true',
      },
      headers: {
        'X-RapidAPI-Key': `${config.nbaApiKey}`,
        'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      return response
    } catch (error) {
      throw new Error('Sorry No Games for that player')
    }
  },  
}
export default nbaService;