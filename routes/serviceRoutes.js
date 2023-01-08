import express from 'express';
import { createService, getServices } from '../controllers/serviceController.js';
const router = express.Router();

router.route('/').get(getServices).post(createService)

export default router;