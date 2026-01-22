import express from 'express';
import {
  createService,
  getServices,
} from '../controllers/serviceController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(protect, authorize('admin'), createService)
  .get(protect, getServices);

export default router;
