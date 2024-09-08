import { Router } from "express";
import {getAllTeams, getTeamStats, getTeamBio, getTeamTopPerformers, getVideos, fetchTeamRoster, fetchNews, fetchSchedule} from "../controllers/teamController.js"

const router = Router();




/**
 * @swagger
 * /api/teams:
 *  get:
 *    summary: Get All teams 
 *    tags: [Teams]
 *    responses:
 *       200:
 *        description: returns List of Team Names and IDs
 *        content: 
 *          application/json:
 *            schema:
 *              type: array 
 *              items:
 *                $ref: '#/components/schemas/All'
 *              example:
 *                value: [{ "id": "ATL", "name": "Atlanta Hawks" }, { "id": "LAL", "name": "Los Angles Lakers" }]
 *       404:
 *         $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *
 */
// Route to get All Players 
router.get('/', getAllTeams)


/**
 * @swagger
 * /api/teams/{id}/stats:
 *  get:
 *    summary: Get Teams Statistical Metrics By Season Year
 *    tags: [Teams]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teams unique identifier
 *    responses:
 *       200:
 *         description: The teams stats by season.
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/TeamStats'
 *       404:
 *          $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *         
 * 
 */
// Route to get Team Stats By Id 
router.get('/:id/stats', getTeamStats)




/**
 * @swagger
 * /api/teams/{id}/info:
 *  get:
 *    summary: Get Teams basic info 
 *    tags: [Teams]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teams unique identifier
 *    responses:
 *       200:
 *         description: The teams stats by season.
 *         content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                    _id:
 *                      type: string
 *                      example: ATL
 *                    name:
 *                      type: string
 *                      example: Atlanta Hawks
 *                    logo:
 *                      type: string 
 *                      example: "https://cdn.nba.com/teams/uploads/sites/1610612737/2023/01/atl_hawks_primary_icon.svg"
 *                    conference:
 *                      type: string 
 *                      example: Eastern Conference
 *       404:
 *          $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *        
 */
// Route to get Team Info
router.get('/:id/info', getTeamBio)

/**
 * @swagger
 * /api/teams/{id}/top:
 *  get:
 *    summary: Get Teams top perfomers 
 *    tags: [Teams]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teams unique identifier
 *    responses:
 *       200:
 *         description: The teams stats by season.
 *         content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                    _id:
 *                      type: string
 *                      example: ATL
 *                    topPerformers:
*                      type: array
*                      items:
*                        type: object
*                        properties:
*                          blk:
*                            type: object
*                            properties:
*                              total:
*                                type: string
*                                example: "1.5"
*                              playerID:
*                                type: array
*                                items:
*                                  type: string
*                                example: ["28218011729"]
*                          ast:
*                            type: object
*                            properties:
*                              total:
*                                type: string
*                                example: "10.8"
*                              playerID:
*                                type: array
*                                items:
*                                  type: string
*                                example: ["28978646789"]
*                          tptfgm:
*                            type: object
*                            properties:
*                              total:
*                                type: string
*                                example: "3.2"
*                              playerID:
*                                type: array
*                                items:
*                                  type: string
*                                example: ["28978646789"]
*                          stl:
*                            type: object
*                            properties:
*                              total:
*                                type: string
*                                example: "1.4"
*                              playerID:
*                                type: array
*                                items:
*                                  type: string
*                                example: ["28008317499"]
*                          TOV:
*                            type: object
*                            properties:
*                              total:
*                                type: string
*                                example: "4.4"
*                              playerID:
*                                type: array
*                                items:
*                                  type: string
*                                example: ["28978646789"]
*                          pts:
*                            type: object
*                            properties:
*                              total:
*                                type: string
*                                example: "25.7"
*                              playerID:
*                                type: array
*                                items:
*                                  type: string
*                                example: ["28978646789"]
*                          reb:
*                            type: object
*                            properties:
*                              total:
*                                type: string
*                                example: "10.6"
*                              playerID:
*                                type: array
*                                items:
*                                  type: string
*                                example: ["28218011729"]
 *       404:
 *          $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *        
 */
// Route to get Team Top Performers
router.get('/:id/top', getTeamTopPerformers)


/**
 * @swagger
 * /api/teams/{id}/videos:
 *  get:
 *    summary: Get Teams videos
 *    tags: [Teams]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teams unique identifier
 *    responses:
 *       200:
 *         description: The teams stats by season.
 *         content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                    _id:
 *                      type: string
 *                      example: ATL
 *                    videos:
 *                        type: object
 *                        properties:
 *                            0:
 *                             type: string
 *                             example: 'https://www.youtube.com/watch?v=1tvCm9lqRZg&pp=ygUNYXRsYW50YSBoYXdrcw%3D%3D'
 *       404:
 *          $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *        
 */
router.get('/:id/videos', getVideos)

/**
 * @swagger
 * /api/teams/{id}/roster:
 *  get:
 *    summary: Get Teams Roster
 *    tags: [Teams]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teams unique identifier
 *    responses:
 *       200:
 *         description: The teams current roster
 *         content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                    statusCode:
 *                      type: number
 *                      example: 200
 *                    body:
 *                        type: object
 *                        properties:
 *                            team:
 *                             type: string
 *                             example: 'SAC'
 *                            teamID:
 *                             type: string
 *                             example: 'SAC'
 *                            roster:
 *                                 type: object
 *                                 properties:
 *                                      player:
 *                                          type: object
 *                                          
 *                                        
 *      
 *                              
 *       404:
 *          $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         $ref: '#/components/responses/ErrorInternalServerError'
 *        
 */
router.get('/:id/roster', fetchTeamRoster)
/**
 * @swagger
 * /api/players/{id}/news:
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

router.get('/:id/news', fetchNews)


/**
 * @swagger
 * /api/teams/{id}/schedule:
 *  get:
 *    summary: Get Team Schedule
 *    tags: [NBA Schedule]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The unique identifier for the team (team abbreviation or ID).
 *    responses:
 *       200:
 *         description: The schedule for the specified team.
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
 *                            gameID:
 *                              type: string
 *                              description: The unique identifier for the game.
 *                              example: "20241024_SA@DAL"
 *                            seasonType:
 *                              type: string
 *                              description: The type of the season (e.g., Regular Season).
 *                              example: "Regular Season"
 *                            away:
 *                              type: string
 *                              description: The abbreviation of the away team.
 *                              example: "SA"
 *                            gameTime:
 *                              type: string
 *                              description: The time of the game.
 *                              example: "7:30 PM"
 *                            gameDate:
 *                              type: string
 *                              description: The date of the game.
 *                              example: "2024-10-24"
 *                            gameStatus:
 *                              type: string
 *                              description: The status of the game.
 *                              example: "Scheduled"
 *                            neutralSite:
 *                              type: string
 *                              description: Indicates if the game is played at a neutral site.
 *                              example: "False"
 *                            isTournamentGame:
 *                              type: string
 *                              description: Indicates if the game is part of a tournament.
 *                              example: "False"
 *                            home:
 *                              type: string
 *                              description: The abbreviation of the home team.
 *                              example: "DAL"
 *                            teamIDHome:
 *                              type: string
 *                              description: The ID of the home team.
 *                              example: "7"
 *                            teamIDAway:
 *                              type: string
 *                              description: The ID of the away team.
 *                              example: "27"
 *                            gameStatusCode:
 *                              type: string
 *                              description: The status code of the game.
 *                              example: "0"
 *       404:
 *         description: Schedule not found for the provided team ID.
 *         $ref: '#/components/responses/ErrorNotFound'
 *       500:
 *         description: Internal server error.
 *         $ref: '#/components/responses/ErrorInternalServerError'
 */
router.get('/:id/schedule', fetchSchedule)
export default router;