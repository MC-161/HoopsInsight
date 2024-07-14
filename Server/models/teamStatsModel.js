import mongoose from "mongoose";
const Schema = mongoose.Schema;


/**
 * @swagger
 * components:
 *   schemas:
 *     TeamStats:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The team's unique identifier
 *           example: ATL
 *              
 *         stats:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               year:
 *                 type: object
 *                 properties:
 *                   year:
 *                     type: integer
 *                     description: Year of the statistics
 *                   age:
 *                     type: number
 *                     description: Average age of the team
 *                   w:
 *                     type: integer
 *                     description: Number of wins
 *                   l:
 *                     type: integer
 *                     description: Number of losses
 *                   pw:
 *                     type: integer
 *                     description: Pythagorean wins
 *                   pl:
 *                     type: integer
 *                     description: Pythagorean losses
 *                   mov:
 *                     type: number
 *                     description: Margin of victory
 *                   sos:
 *                     type: number
 *                     description: Strength of schedule
 *                   srs:
 *                     type: number
 *                     description: Simple rating system
 *                   ortg:
 *                     type: number
 *                     description: Offensive rating
 *                   drtg:
 *                     type: number
 *                     description: Defensive rating
 *                   nrtg:
 *                     type: number
 *                     description: Net rating
 *                   pace:
 *                     type: number
 *                     description: Pace of play
 *                   ftr:
 *                     type: number
 *                     description: Free throw rate
 *                   3par:
 *                     type: number
 *                     description: Three-point attempt rate
 *                   ts_pct:
 *                     type: number
 *                     description: True shooting percentage
 *                   efg_pct:
 *                     type: number
 *                     description: Effective field goal percentage
 *                   tov_pct:
 *                     type: number
 *                     description: Turnover percentage
 *                   orb_pct:
 *                     type: number
 *                     description: Offensive rebound percentage
 *                   ft_fga:
 *                     type: number
 *                     description: Free throws per field goal attempt
 *                   efg_pct_opponent:
 *                     type: number
 *                     description: Effective field goal percentage allowed to opponents
 *                   tov_pct_opponent:
 *                     type: number
 *                     description: Turnover percentage forced against opponents
 *                   drb_pct:
 *                     type: number
 *                     description: Defensive rebound percentage
 *                   ft_fga_opponent:
 *                     type: number
 *                     description: Free throws per field goal attempt allowed to opponents
 *                 required:
 *                   - year
 *                   - age
 *                   - w
 *                   - l
 *                   - pw
 *                   - pl
 *                   - mov
 *                   - sos
 *                   - srs
 *                   - ortg
 *                   - drtg
 *                   - nrtg
 *                   - pace
 *                   - ftr
 *                   - 3par
 *                   - ts_pct
 *                   - efg_pct
 *                   - tov_pct
 *                   - orb_pct
 *                   - ft_fga
 *                   - efg_pct_opponent
 *                   - tov_pct_opponent
 *                   - drb_pct
 *                   - ft_fga_opponent
 *                 description: Statistics for a specific year
 */



// Define the schema
const TeamStatSchema = new Schema({
    _id: String, // Team abbreviation or ID
    stats: [{
        year: Number,
        age: Number,
        w: Number,
        l: Number,
        pw: Number,
        pl: Number,
        mov: Number,
        sos: Number,
        srs: Number,
        ortg: Number,
        drtg: Number,
        nrtg: Number,
        pace: Number,
        ftr: Number,
        '3par': Number,
        ts_pct: Number,
        efg_pct: Number,
        tov_pct: Number,
        orb_pct: Number,
        ft_fga: Number,
        efg_pct_opponent: Number,
        tov_pct_opponent: Number,
        drb_pct: Number,
        ft_fga_opponent: Number,
        arena: String,
        attend: Number,
        attend_per_game: Number
    }]
});

// Create a model based on the schema
const TeamStats = mongoose.model('NBATeamStats', nbaTeamSchema);
e

export default TeamStats;