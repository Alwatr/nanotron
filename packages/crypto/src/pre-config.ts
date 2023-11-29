import {HashGeneratorConfig, TokenGeneratorConfig} from './type.js';

/**
 * Hash generator pre configuration for making random self-validate **secrets**.
 */
export const secretGeneratorPreConfig: HashGeneratorConfig = {
  prefix: 's',
  algorithm: 'sha384',
  encoding: 'base64url',
  crcLength: 4,
};

/**
 * Hash generator pre configuration for making random self-validate **user-id**.
 */
export const userIdGeneratorPreConfig: HashGeneratorConfig = {
  prefix: 'u',
  algorithm: 'sha1',
  encoding: 'base64url',
  crcLength: 4,
};

/**
 * Token generator pre configuration for making secure self-validate **user-token**.
 */
export const userTokenGeneratorPreConfig: Pick<TokenGeneratorConfig, 'algorithm' | 'encoding' | 'prefix'> = {
  prefix: 't',
  algorithm: 'sha224',
  encoding: 'base64url',
};
