import mongoose from 'mongoose';
import PlayerStatsSchema from './playerStatsModel.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     Player:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The player's unique identifier.
 *           example: "60d5ec49e1d5b9002f9e43b8"
 *         name:
 *           type: string
 *           description: The name of the player.
 *           example: "John Doe"
 *         stats:
 *           type: array
 *           description: List of Season years
 *           items:
 *            $ref: '#/components/schemas/PlayerStats'
 *
 * 
 */

const PlayerSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stats: {
    type: [PlayerStatsSchema],
    default: [],
  },
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);
export default Player;