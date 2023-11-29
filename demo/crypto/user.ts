import {AlwatrUserGenerator, userIdGeneratorPreConfig, userTokenGeneratorPreConfig} from '@alwatr/crypto';
import {createLogger} from '@alwatr/logger';
import {delay} from '@alwatr/util';

import type {User} from '@alwatr/type';

const logger = createLogger('crypto/user', true);

const newLocal = 'my-very-secret-key';
const userGenerator = new AlwatrUserGenerator({
  userId: userIdGeneratorPreConfig,
  token: {
    ...userTokenGeneratorPreConfig,
    secret: newLocal,
    duration: '2s',
  },
});

const user: User = {
  id: userGenerator.generateUserId(),
  country: 'iran',
  fullName: 'امیرمحمد نجفی',
  gender: 'male',
  lpe: 1,
  phoneNumber: 989151234567,
};

logger.logProperty?.('user', user);

logger.logOther?.('verifyUserId:', userGenerator.verifyUserId(user.id));

const userToken = userGenerator.generateToken([user.id, user.lpe]);
logger.logOther?.('user token:', userToken);

const userTokenValidation = (): void => {
  const tokenValidationStatus = userGenerator.verifyToken([user.id, user.lpe], userToken);
  logger.logOther?.('user token validation status:', tokenValidationStatus);
};

userTokenValidation();
await delay(2000);
userTokenValidation();
await delay(1000);
userTokenValidation();
