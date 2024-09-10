import {createLogger} from '@alwatr/logger';

import {type HttpStatusCode, HttpStatusCodes, HttpStatusMessages} from './const.js';

import type {HttpResponseHeaders, HttpMethod, ErrorResponse} from './type.js';
import type {Json} from '@alwatr/type-helper';
import type {IncomingMessage, ServerResponse} from 'node:http';

/**
 * Configuration options for the NanotronApiConnection.
 */
export interface NanotronApiConnectionConfig {
  /**
   * A prefix to be added to the beginning of the `url` of all defined routes.
   *
   * @default '/api/'
   */
  prefix: `/${string}/` | '/';
}
export class NanotronApiConnection {
  protected static versionPattern_ = new RegExp('^/v[0-9]+/');
  readonly url;

  readonly method;

  protected readonly logger_;
}
