import express from 'express';
import { createAsset, getAssets } from '../controllers/assetController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createAsset);
router.get('/', protect, getAssets);

export default router;
