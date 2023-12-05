import {AlwatrCryptoFactory} from '@alwatr/crypto';
import {createLogger} from '@alwatr/logger';
import {delay} from '@alwatr/util';

const logger = createLogger('crypto/user', true);

const cryptoFactory = new AlwatrCryptoFactory({
  secret: 'my-very-secret-key',
  duration: '2s',
});

const user = {
  id: cryptoFactory.generateUserId(),
  lpe: 1,
  fname: 'امیرمحمد',
  lname: 'نجفی',
};

logger.logProperty?.('user.id', user.id);

logger.logProperty?.('verifyUserId', cryptoFactory.verifyUserId(user.id));

await delay(999);

const userToken = cryptoFactory.generateToken([user.id, user.lpe]);
logger.logProperty?.('user.token', userToken);

const verifyAuth = (): void => {
  const tokenValidity = cryptoFactory.verifyToken([user.id, user.lpe], userToken);
  logger.logProperty?.('tokenValidity', tokenValidity);
};

verifyAuth();
await delay(999);
verifyAuth();
await delay(999);
verifyAuth();
await delay(999);
verifyAuth();
await delay(999);
verifyAuth();
