import axios from "axios";
import config from '../config.mjs'

const nbaService = {
  getPlayerImageBio : async (playerId) => {
    const options = {
      method: 'GET',
      url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo',
      params: {
        playerID: `${playerId}`,
        statsToGet: 'totals'
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
  getTeamRoster : async(teamId) => {
    const options = {
      method: 'GET',
      url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBATeamRoster',
      params: {
        teamAbv: `${teamId}`,
        statsToGet: 'totals'
      },
      headers: {
        'x-rapidapi-key': `${config.nbaApiKey}`,
        'x-rapidapi-host': 'tank01-fantasy-stats.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response.data
    } catch (error) {
      console.error(error);
    }
  },  
  getNews : async (id, isTeam = true) => {
    // Decide whether the ID is a team abbreviation or player ID
    const options = {
      method: 'GET',
      url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBANews',
      params: {
        playerID: isTeam ? '' : `${id}`,
        teamAbv: isTeam ? `${id}` : '', 
        recentNews: 'true',
        maxItems: '10'
      },
      headers: {
        'x-rapidapi-key': `${config.nbaApiKey}`,
        'x-rapidapi-host': 'tank01-fantasy-stats.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, getSchedule : async (id) => {
    // Decide whether the ID is a team abbreviation or player ID
    const options = {
      method: 'GET',
      url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBATeamSchedule',
      params: {
        teamAbv: `${id}`,
        season: '2025'
      },
      headers: {
        'x-rapidapi-key': `${config.nbaApiKey}`,
        'x-rapidapi-host': 'tank01-fantasy-stats.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response.data
    } catch (error) {
      console.error(error);
    }
  },
}
export default nbaService;