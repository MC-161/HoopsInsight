import { Router } from "express";
import {fetchGamesPlayed, getAllPlayers, getPlayer} from "../controllers/playerController.js"

const router = Router();

// Route to get All Players 
router.get('/teams', getAllPlayers)
// Route to get Player By Id 
router.get('/players/:id', getPlayer)
// ROute to get Player Games Played  tank01
router.get('/players/:id/gamesPlayed', fetchGamesPlayed)


export default router;