import { Router } from "express";
import {getAllTeams, getTeamStats, getTeamBio, getTeamTopPerformers, getVideos} from "../controllers/teamController.js"

const router = Router();

// Route to get All Players 
router.get('/teams', getAllTeams)
// Route to get Team Stats By Id 
router.get('/teams/:id/stats', getTeamStats)
// Route to get Team Info
router.get('/teams/:id/info', getTeamBio)
// Route to get Team Top Performers
router.get('/teams/:id/top', getTeamTopPerformers)
router.get('/teams/:id/videos', getVideos)
export default router;