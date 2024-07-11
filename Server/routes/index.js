import { Router } from 'express';
import playerRoutes from './playerRoutes.js';
import teamRoutes from './teamRoutes.js'
const router = Router();

// Use player routes
router.use('/', playerRoutes);
router.use('/', teamRoutes);


export default router;