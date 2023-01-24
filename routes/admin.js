import express from 'express';
const router = express.Router();
import controller from '../controllers/admin.js';


router.put('/update/:id', controller.updateAdmin);
router.delete('/delete/:id', controller.deleteAdmin);
//routes go here

export default router;