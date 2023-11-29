import {createHmac} from 'node:crypto';

import {parseDuration} from '@alwatr/math';

import type {TokenGeneratorConfig, TokenStatus} from './type.js';

/**
 * Secure authentication HOTP token generator (HMAC-based One-Time Password algorithm).
 */
export class AlwatrTokenGenerator {
  protected _duration: number | null;

  /**
   * The current epoch based on the configured duration.
   */
  get epoch(): number {
    return this._duration == null ? 0 : Math.floor(Date.now() / this._duration);
  }

  /**
   * Creates a new instance of AlwatrTokenGenerator.
   * @param config The configuration for the token generator.
   */
  constructor(public config: TokenGeneratorConfig) {
    this._duration = config.duration == null ? null : parseDuration(config.duration);
  }

  /**
   * Generates a HOTP token based on the provided data for special duration.
   * @param data The data to generate the token from.
   * @returns The generated token.
   * @example
   * ```typescript
   * user.auth = tokenGenerator.generate(`${user.id}-${user.role}`);
   * ```
   */
  generate(data: string): string {
    return this._generate(data, this.epoch);
  }

  /**
   * Verifies if a token is valid.
   * @param data The data used to generate the token.
   * @param token The token to verify.
   * @returns The status of the token verification.
   * @example
   * ```typescript
   * const validateStatus = tokenGenerator.verify(`${user.id}-${user.role}`, user.auth);
   * ```
   */
  verify(data: string, token: string): TokenStatus {
    const epoch = this.epoch;
    if (token === this._generate(data, epoch)) {
      return 'valid';
    }
    else if (this._duration == null) {
      return 'invalid';
    }
    else if (token === this._generate(data, epoch - 1)) {
      return 'expired';
    }
    else {
      return 'invalid';
    }
  }

  /**
   * Generates a cryptographic token based on the provided data and epoch.
   * @param data - The data to be used in the token generation.
   * @param epoch - The epoch value to be used in the token generation.
   * @returns The generated cryptographic token.
   */
  protected _generate(data: string, epoch: number): string {
    return createHmac(this.config.algorithm, data)
      .update(data + epoch)
      .digest(this.config.encoding);
  }
}
