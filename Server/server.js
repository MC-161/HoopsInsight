import config from "./config.mjs"
import express from 'express';
import mongoose from 'mongoose';
// import data from "./data/player_stats_2.json" assert { type: "json" };
// import teamData from "./data/team_stats_modified.json" assert { type: "json" };
// import Player from './models/playerModel.js';
// import Team from './models/teamModel.js';
import swaggerDocs from './swagger.js';

const createServer = () => {
  const app = express();
  const PORT = config.port || 6001;
  mongoose
    .connect(config.mongodbUri, {
    })
    .then(async () => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
      swaggerDocs(app, PORT)
    })
    .catch((error) => console.log(`${error} did not connect`));
    return app
};

export default createServer;
      // // LOAD TEAM DATA
      // for (const teamId in teamData.body) {
      //   const Tdata = teamData.body[teamId];

      //   try {
      //     // Insert the player into MongoDB with the same ID as in the JSON data
      //     const team = await Team.create({
      //       _id: teamId,
      //       name: Tdata.name,
      //       logo: Tdata.logo,
      //       videos: Tdata.video,
      //       conference: Tdata.conference,
      //       topPerformers: Tdata.top_performers,
      //       stats: Tdata.stats,
      //     });
      //     console.log(`Inserted player ${team.name} into MongoDB with ID ${team._id}`);
      //   } catch (error) {
      //     console.error(`Failed to insert Team ${Tdata.name}:`, error);
      //   }
      // }

      // LOAD PLAYER DATA
      // Iterate over each player in the NBA player data
      // for (const playerId in data.body) {
      //   const playerData = data.body[playerId];

      //   try {
      //     // Insert the player into MongoDB with the same ID as in the JSON data
      //     const player = await Player.create({
      //       _id: playerId,
      //       name: playerData.name,
      //       stats: playerData.stats,
      //     });
      //     console.log(`Inserted player ${player.name} into MongoDB with ID ${player._id}`);
      //   } catch (error) {
      //     console.error(`Failed to insert player ${playerData.name}:`, error);
      //   }
      // }
