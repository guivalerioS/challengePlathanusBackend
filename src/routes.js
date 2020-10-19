import { Router } from 'express';
import sessionRoutes from './app/domains/Session/routes';
import userRoutes from './app/domains/User/routes';

const routes = new Router();

routes.use(sessionRoutes);
routes.use(userRoutes);


export default routes;
