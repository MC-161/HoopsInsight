import Player from "../models/playerModel.js";

const playerService = {
  getAllPlayers : async () => {
    try {
      const players = await Player.find().select('name _id').lean();
      return players
    } catch (error) {
      throw new Error("Error Retrieving players" + error.message);
    }
  },
  getPlayerById: async (id) => {
    try {
      const playerStats = await Player.findById(id)
      return playerStats
    } catch (error) {
      throw new Error("Error Retrieving player" + error.message);
    }
  }

}

export default playerService;