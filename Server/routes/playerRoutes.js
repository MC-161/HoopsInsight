import { Router } from "express";
import {
  fetchGamesPlayed,
  getAllPlayers,
  getPlayer,
  fetchNews
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
 * /api/players:
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
router.get("/", getAllPlayers);

/**
 * @swagger
 * /api/players/{id}:
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
 *          $ref: '#/components/responses/ErrorNotFound'
 *       
 */
// Route to get Player By Id
router.get("/:id", getPlayer);

/**
 * @swagger
 * /api/players/{id}/gamesPlayed:
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
 *       200:
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
 *       404:
 *          $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *
 *
 */

// ROute to get Player Games Played  tank01
router.get("/:id/gamesPlayed", fetchGamesPlayed);






/**
 * @swagger
 * /api/teams/{id}/news:
 *  get:
 *    summary: Get Player or Team News
 *    tags: [NBA News]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The unique identifier for a player or team (playerID or team abbreviation)
 *    responses:
 *       200:
 *         description: The latest NBA news related to the player or team.
 *         content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                    statusCode:
 *                      type: number
 *                      example: 200
 *                    body:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            link:
 *                              type: string
 *                              description: The URL of the news article.
 *                              example: "https://www.espn.com/nba/story/_/id/38156416"
 *                            image:
 *                              type: string
 *                              description: Image URL associated with the news article.
 *                              example: "https://a.espncdn.com/photo/2022/1017/r1077135_1296x518_5-2.jpg"
 *                            title:
 *                              type: string
 *                              description: Title of the news article.
 *                              example: "Ain't it fun? Steph Curry performs with Paramore at Chase Center concert"
 *                            playerIDs:
 *                              type: array
 *                              items:
 *                                type: string
 *                              description: A list of player IDs relevant to the news article.
 *                              example: ["28046691632"]
 *       404:
 *         description: News not found for the provided ID.
 *         $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         description: Internal server error.
 *         $ref: '#/components/responses/ErrorInternalServerError'
 */
router.get("/:id/news", fetchNews);



export default router;
