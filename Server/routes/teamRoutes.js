import { Router } from "express";
import {getAllTeams, getTeamStats, getTeamBio, getTeamTopPerformers, getVideos} from "../controllers/teamController.js"

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
export default router;