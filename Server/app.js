import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import data from "./data/player_stats_2.json" assert { type: "json" };
import teamData from "./data/team_stats_modified.json" assert { type: "json" };
import config from './config.mjs';
import Player from './models/playerModel.js';
import Team from './models/teamModel.js';
import routes from './routes/index.js';

const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// Middleware to handle routes
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = config.port || 6001;
mongoose
  .connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // LOAD TEAM DATA
    for (const teamId in teamData.body) {
      const Tdata = teamData.body[teamId];

      try {
        // Insert the player into MongoDB with the same ID as in the JSON data
        const team = await Team.create({
          _id: teamId,
          name: Tdata.name,
          logo: Tdata.logo,
          videos: Tdata.video,
          conference: Tdata.conference,
          topPerformers: Tdata.topPerformers,
          stats: Tdata.stats,
        });
        console.log(`Inserted player ${team.name} into MongoDB with ID ${team._id}`);
      } catch (error) {
        console.error(`Failed to insert Team ${Tdata.name}:`, error);
      }
    }
    
    // LOAD PLAYER DATA 
    // // Iterate over each player in the NBA player data
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
  })
  .catch((error) => console.log(`${error} did not connect`));