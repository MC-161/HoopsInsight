import { Router } from "express";

import * as PlayerController from '../controllers/playerController'

const router = Router();

// Route to get All Players 
router.get('/players', PlayerController.getAllPlayers)
// Route to get Player By Id 
router.get('/players/:id', PlayerController.getPlayer)
// ROute to get Player Games Played  tank01
router.get('/players/:id/gamesPlayed', PlayerController.fetchGamesPlayed)

