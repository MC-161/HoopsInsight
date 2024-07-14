import mongoose, { Schema } from "mongoose";

/**
 * @swagger
 * components:
 *   responses:
 *     ErrorNotFound:
 *       description: The requested resource was not found.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: A human-readable message describing the error.
 *               errorCode:
 *                 type: string
 *                 description: A unique error code for the specific error scenario.
 *             example:
 *               message: The requested resource was not found.
 *               errorCode: ERR404
 *
 *     ErrorInternalServerError:
 *       description: An unexpected error occurred on the server.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: A human-readable message describing the error.
 *               errorCode:
 *                 type: string
 *                 description: A unique error code for the specific error scenario.
 *             example:
 *               message: An unexpected error occurred on the server.
 *               errorCode: ERR500
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    Team:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The teams unique identifier
 *        name:
 *          type: string
 *          description: The name of the team
 *        videos:
 *          type: Array
 *          description: The name of the team
 *        logo:
 *          type: string
 *          description: The name of the team
 *        conference:
 *          type: string
 *          description: The name of the team
 *        topPerformers:
 *          type: Array
 *          description: Stat and Player Id of Top performer
 *        stats:
 *           type: array
 *           description: List of Season years
 *           items:
 *            $ref: '#/components/schemas/TeamStats'
 *
 */

const teamSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  videos: {
    type: Array,
    default: [],
  },
  logo: {
    type: String,
    required: true,
  },
  conference: {
    type: String,
    required: true,
  },
  topPerformers: {
    type: Array,
    default: [],
  },
  stats: {
    type: Array,
    default: [],
  },
});

const Team = mongoose.model("Team", teamSchema);
export default Team;
