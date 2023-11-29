import { AlwatrHashGenerator } from './hash.js';
import { AlwatrTokenGenerator } from './token.js';

import type {UserGeneratorConfig, TokenStatus } from './type.js';

/**
 * User factory for generating self-validate user-id and user-token.
 */
export class AlwatrUserGenerator {
  protected _tokenGenerator: AlwatrTokenGenerator;
  protected _hashGenerator: AlwatrHashGenerator;

  /**
   * Creates a new instance of AlwatrUserFactory.
   * @param hashConfig The configuration for the hash generator.
   * @param tokenConfig The configuration for the token generator.
   */
  constructor(config: UserGeneratorConfig) {
    this._hashGenerator = new AlwatrHashGenerator(config.userId);
    this._tokenGenerator = new AlwatrTokenGenerator(config.token);
  }

  /**
   * Generates a new self-verifiable user ID.
   * @returns The generated user ID.
   * @example
   * ```typescript
   * const newUser = {
   *   id: userFactory.generateUserId(),
   *   ...
   * }
   * ```
   */
  generateUserId(): string {
    return 'U' + this._hashGenerator.generateRandomSelfValidate();
  }

  /**
   * Validates a user ID without token.
   * @param userId The user ID to verify.
   * @returns A boolean indicating whether the user ID is valid.
   * @example
   * ```typescript
   * if (!userFactory.verifyUserId(user.id)) {
   *   throw new Error('invalid_user');
   * }
   * ```
   */
  verifyUserId(userId: string): boolean {
    return this._hashGenerator.verifySelfValidate(userId.substring(1));
  }

  /**
   * Generates a user authentication token.
   * @param uniquelyList The list of values to generate the token from.
   * @returns The generated user token.
   * @example
   * ```typescript
   * const userToken = userFactory.generateToken([user.id, user.lpe]);
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
   * if (!userFactory.verifyToken([user.id, user.lpe], userToken)) {
   *   throw new Error('invalid_token');
   * }
   * ```
   */
  verifyToken(uniquelyList: (string | number | boolean)[], token: string): TokenStatus {
    return this._tokenGenerator.verify(uniquelyList.join(), token);
  }
}
