import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controller/UserController';
import SessionsController from './app/controller/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', (req, res) => {
  return res.json({ ok: true });
});

export default routes;
