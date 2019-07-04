import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Bruno Bisogni',
    email: 'bruno@bisognidev.xyx',
    password_hash: '56465456456',
  });
  return res.json(User);
});

export default routes;
