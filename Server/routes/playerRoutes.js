import { Router } from "express";
import {
  fetchGamesPlayed,
  getAllPlayers,
  getPlayer,
} from "../controllers/playerController.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     All:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The player ID
 *         name:
 *           type: string
 *           description: The player's name
 *       required:
 *         - id
 *         - name
 */

/**
 * @swagger
 * /players:
 *   get:
 *     summary: Get all players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: The list of players with names and IDs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/All'
 *             examples:
 *               example1:
 *                 summary: Example with players
 *                 value: [{ "id": "123", "name": "Lebron James" }, { "id": "456", "name": "Stephen Curry" }]
 *       404:
 *         $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *
 */
// Route to get All Players
router.get("/players", getAllPlayers);

/**
 * @swagger
 * /players/{id}:
 *  get:
 *    summary: Get Player By ID
 *    tags: [Players]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player ID
 *    responses:
 *       200:
 *         description: The player description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       404:
 *         description: Player Not Found In DataBase
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error404'
 */
// Route to get Player By Id
router.get("/players/:id", getPlayer);

/**
 * @swagger
 * /players/{id}/gamesPlayed:
 *  get:
 *    summary: Get Player Games from Current Season
 *    tags: [Players]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: string
 *        required: true
 *        description: The player ID
 *    responses:
 *      200:
 *        description: List of Player games Stats
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                body:
 *                  type: object
 *                  additionalProperties:
 *                    type: object
 *                    properties:
 *                      stats:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/PlayerStats'
 *      404:
 *         description: Player Games Not Found In DataBase
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error404'
 *
 *
 */

// ROute to get Player Games Played  tank01
router.get("/players/:id/gamesPlayed", fetchGamesPlayed);

export default router;
