import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não Aceito' });
  }
  console.log(authHeader);
  const [, Token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(Token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'token inválido' });
  }
};
