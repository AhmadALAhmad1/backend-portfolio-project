import express from 'express';
const router = express.Router();
import controller from '../controllers/info.js';

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.post);

export default router;