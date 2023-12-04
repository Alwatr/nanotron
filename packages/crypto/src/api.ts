import {AlwatrHashGenerator} from './hash.js';
import {AlwatrTokenGenerator} from './token.js';

import type {CryptoFactoryConfig, TokenStatus} from './type.js';

/**
 * Crypto factory for generating self-validate user-id, user-token, secret, device-id.
 */
export class AlwatrCryptoFactory {
  protected _tokenGenerator: AlwatrTokenGenerator;
  protected _hashGenerator: AlwatrHashGenerator;

  /**
   * Creates a new instance of crypto factory.
   * @param config The configuration used to create the crypto factory.
   */
  constructor(config: CryptoFactoryConfig) {
    this._hashGenerator = new AlwatrHashGenerator(config.hashGeneratorConfig);
    this._tokenGenerator = new AlwatrTokenGenerator(config.tokenGeneratorConfig);
  }

  /**
   * Generates a new self-verifiable user ID.
   * @returns The generated user ID.
   * @example
   * ```typescript
   * const newUser = {
   *   id: cryptoFactory.generateUserId(),
   *   ...
   * }
   * ```
   */
  generateUserId(): string {
    return this._hashGenerator.generateRandomSelfValidate();
  }

  /**
   * Validates a user ID without token.
   * @param userId The user ID to verify.
   * @returns A boolean indicating whether the user ID is valid.
   * @example
   * ```typescript
   * if (!cryptoFactory.verifyUserId(user.id)) {
   *   throw new Error('invalid_user');
   * }
   * ```
   */
  verifyUserId(userId: string): boolean {
    return this._hashGenerator.verifySelfValidate(userId);
  }

  /**
   * Generates a user authentication token.
   * @param uniquelyList The list of values to generate the token from.
   * @returns The generated user token.
   * @example
   * ```typescript
   * const userToken = cryptoFactory.generateToken([user.id, user.lpe]);
   * ```
   */
  generateToken(uniquelyList: (string | number | boolean)[]): string {
    return this._tokenGenerator.generate(uniquelyList.join());
  }

  /**
   * Verifies a user authentication token.
   * @param uniquelyList The list of values used to generate the token.
   * @param token The user token to verify.
   * @returns The status of the token verification.
   * @example
   * ```typescript
   * if (!cryptoFactory.verifyToken([user.id, user.lpe], userToken)) {
   *   throw new Error('invalid_token');
   * }
   * ```
   */
  verifyToken(uniquelyList: (string | number | boolean)[], token: string): TokenStatus {
    return this._tokenGenerator.verify(uniquelyList.join(), token);
  }

  /**
   * Generates a new self-verifiable secret.
   * @returns The generated secret.
   * @example
   * ```typescript
   * const config = {
   *   storageToken: cryptoFactory.generateSecret(),
   *   ...
   * }
   * ```
   */
  generateSecret(): string {
    return this._hashGenerator.generateRandomSelfValidate();
  }

  /**
   * Validates a user ID without token.
   * @param secret The user ID to verify.
   * @returns A boolean indicating whether the user ID is valid.
   * @example
   * ```typescript
   * if (!cryptoFactory.verifySecret(config.storageToken)) {
   *   throw new Error('invalid_secret');
   * }
   * ```
   */
  verifySecret(secret: string): boolean {
    return this._hashGenerator.verifySelfValidate(secret);
  }

  /**
   * Generates a new self-verifiable device ID.
   * @returns The generated device ID.
   * @example
   * ```typescript
   * const deviceId = deviceFactory.generateDeviceId();
   * ```
   */
  generateDeviceId(): string {
    return this._hashGenerator.generateRandomSelfValidate();
  }

  /**
   * Validates a device ID.
   * @param deviceId The device ID to verify.
   * @returns A boolean indicating whether the device ID is valid.
   * @example
   * ```typescript
   * if (!deviceFactory.verifyDeviceId(bodyJson.deviceId)) {
   *   throw {
   *    ok: false,
   *    status: 400,
   *    error: 'invalid_device_id',
   *   }
   * }
   * ```
   */
  verifyDeviceId(deviceId: string): boolean {
    return this._hashGenerator.verifySelfValidate(deviceId);
  }
}
