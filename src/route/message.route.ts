import {Router} from 'express';
import {messageCtrl} from '../controller/message.controller'

const router = Router();

router.get('/', messageCtrl.getMessage)
router.post('/', messageCtrl.postMessage)

export default router;


