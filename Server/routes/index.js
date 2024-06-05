import { Router } from 'express';
import playerRoutes from './playerRoutes.js';
const router = Router();

// Use player routes
router.use('/', playerRoutes);




export default router;