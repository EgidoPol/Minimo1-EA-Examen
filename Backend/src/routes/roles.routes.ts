import {Router, RouterOptions} from 'express';
import rolController from '../controllers/rol.controller';

const router = Router();

router.get('/roles', rolController.getRoles);
router.post('/roles/newRol', rolController.postRol);
router.put('/roles/updateRol', rolController.updateRol);

export default router;