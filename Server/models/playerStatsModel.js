import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     PlayerStats:
 *       type: object
 *       properties:
 *         year:
 *           type: integer
 *           description: The year in which the statistics are recorded.
 *           example: 2024
 *         age:
 *           type: integer
 *           description: The age of the player during the season.
 *           example: 20
 *         tm:
 *           type: string
 *           description: The team abbreviation for which the player played.
 *           example: "IND"
 *         g:
 *           type: integer
 *           description: Number of games played.
 *           example: 15
 *         gs:
 *           type: integer
 *           description: Number of games started.
 *           example: 0
 *         mp:
 *           type: integer
 *           description: Total minutes played.
 *           example: 63
 *         fg:
 *           type: integer
 *           description: Field goals made.
 *           example: 8
 *         fga:
 *           type: integer
 *           description: Field goals attempted.
 *           example: 15
 *         fg_pct:
 *           type: number
 *           description: Field goal percentage.
 *           example: 0.533
 *         3p:
 *           type: integer
 *           description: Three-point field goals made.
 *           example: 0
 *         3pa:
 *           type: integer
 *           description: Three-point field goals attempted.
 *           example: 2
 *         3p_pct:
 *           type: number
 *           description: Three-point field goal percentage.
 *           example: 0
 *         2p:
 *           type: integer
 *           description: Two-point field goals made.
 *           example: 8
 *         2pa:
 *           type: integer
 *           description: Two-point field goals attempted.
 *           example: 13
 *         2p_pct:
 *           type: number
 *           description: Two-point field goal percentage.
 *           example: 0.615
 *         efg_pct:
 *           type: number
 *           description: Effective field goal percentage.
 *           example: 0.533
 *         ft:
 *           type: integer
 *           description: Free throws made.
 *           example: 5
 *         fta:
 *           type: integer
 *           description: Free throws attempted.
 *           example: 8
 *         ft_pct:
 *           type: number
 *           description: Free throw percentage.
 *           example: 0.625
 *         orb:
 *           type: integer
 *           description: Offensive rebounds.
 *           example: 3
 *         drb:
 *           type: integer
 *           description: Defensive rebounds.
 *           example: 2
 *         trb:
 *           type: integer
 *           description: Total rebounds.
 *           example: 5
 *         ast:
 *           type: integer
 *           description: Assists.
 *           example: 5
 *         stl:
 *           type: integer
 *           description: Steals.
 *           example: 0
 *         blk:
 *           type: integer
 *           description: Blocks.
 *           example: 0
 *         tov:
 *           type: integer
 *           description: Turnovers.
 *           example: 2
 *         pf:
 *           type: integer
 *           description: Personal fouls.
 *           example: 9
 *         pts:
 *           type: integer
 *           description: Points scored.
 *           example: 21
 */

const PlayerStatsSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  age: { type: Number, required: true },
  tm: { type: String, required: true },
  g: { type: Number, required: true },
  gs: { type: Number, required: true },
  mp: { type: Number, required: true },
  fg: { type: Number, required: true },
  fga: { type: Number, required: true },
  fg_pct: { type: Number, required: true },
  '3p': { type: Number, required: true },
  '3pa': { type: Number, required: true },
  '3p_pct': { type: Number, required: true },
  '2p': { type: Number, required: true },
  '2pa': { type: Number, required: true },
  '2p_pct': { type: Number, required: true },
  efg_pct: { type: Number, required: true },
  ft: { type: Number, required: true },
  fta: { type: Number, required: true },
  ft_pct: { type: Number, required: true },
  orb: { type: Number, required: true },
  drb: { type: Number, required: true },
  trb: { type: Number, required: true },
  ast: { type: Number, required: true },
  stl: { type: Number, required: true },
  blk: { type: Number, required: true },
  tov: { type: Number, required: true },
  pf: { type: Number, required: true },
  pts: { type: Number, required: true },
}, { _id: false });

export default PlayerStatsSchema;