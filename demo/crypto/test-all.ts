import { AlwatrCryptoFactory } from "@alwatr/crypto";

const cryptoFactory = new AlwatrCryptoFactory({
  secret: 'my-very-secret-key',
  duration: '2s',
});

for (let i = 0; i <= 10; i++) {
  const deviceId = cryptoFactory.generateDeviceId();
  const secret = cryptoFactory.generateSecret();
  const userId = cryptoFactory.generateUserId();
  const token = cryptoFactory.generateToken([userId]);

  console.log({ deviceId, secret, userId, token})
  console.log({
    verifyDeviceId: cryptoFactory.verifyDeviceId(deviceId),
    verifySecret: cryptoFactory.verifySecret(secret),
    verifyUserId: cryptoFactory.verifyUserId(userId),
    verifyToken: cryptoFactory.verifyToken([userId], token),
  })
}
