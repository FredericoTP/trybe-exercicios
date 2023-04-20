import jwt, { SignOptions } from 'jsonwebtoken';
import jwtPayload from '../../interfaces/jwtPayload.interface';

const secretKey: string = process.env.JWT_SECRET || 'suaSenhaSecreta';

const configJWT: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
}

const generateToken = (payload: jwtPayload) => {
  const token = jwt.sign(payload, secretKey, configJWT);

  return token;
}

const validateToken = (token: string) => {
  const isValid = jwt.verify(token, secretKey);

  return isValid;
}

export { generateToken, validateToken };