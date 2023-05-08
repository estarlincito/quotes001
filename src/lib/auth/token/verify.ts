import { jwtVerify } from 'jose';
import getJwtSecretKey from './secret';

const verifyToken = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );

    return verified.payload;
  } catch (error) {
    throw new Error('Your token has expired');
  }
};

export default verifyToken;
