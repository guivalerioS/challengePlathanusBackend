import { Router } from 'express';
import UserController from './controller';
import authMiddleware from '../../middlewares/auth';
import {
  storeValidator,
  updateValidator,
  smsValidator,
  verifySmsValidator,
} from './validators';

const router = new Router();

router.get('/users', UserController.getUsers);

router.post('/users', storeValidator, UserController.store);

router.post('/sendSms', smsValidator, UserController.sendSms);

router.post('/verifySms', verifySmsValidator, UserController.verifySms);


router.put(
  '/users',
  updateValidator,
  UserController.update
);



export default router;
