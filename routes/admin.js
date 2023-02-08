
import express from 'express';
const router = express.Router();
import controller from '../controllers/admin.js';

router.get('/', controller.listAdmins)
router.get('/:id', controller.getAdminById)
router.post('/', controller.createAdmin)
router.put('/update/:id', controller.updateAdmin);
router.delete('/delete/:id', controller.deleteAdmin);


export default router;