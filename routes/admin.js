import express from 'express';
const router = express.Router();
import controller from '../controllers/admin.js'

// import listAdmins from '.././controllers/admin.js';
// import getAdminById from '.././controllers/admin.js';
// import createAdmin from '.././controllers/admin.js';


router.get('/', controller.listAdmins) //get all admins
router.get('/:id', controller.getAdminById) // get specific admin
router.post('/create', controller.createAdmin) //create a new admin

export default router;
