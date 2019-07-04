import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionsController from './app/controller/SessionController';

const routes = new Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);
routes.put('/users', UserController.update);

export default routes;
