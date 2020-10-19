import { Router } from 'express';
import SessionController from './controller';
import { storeValidator } from './validators';

const router = new Router();

router.post('/sessions', storeValidator, SessionController.store);

export default router;
