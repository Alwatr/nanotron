import {createLogger} from '@alwatr/logger';

import type {HttpMethod, RouteHandler} from './type.js';
import type {IncomingMessage} from 'node:http';

/**
 * Configuration options for the Nanotron Api Client Request.
 */
export interface NanotronClientRequestConfig {
  /**
   * A prefix to be added to the beginning of the `url` of all defined routes.
   *
   * @default '/api/'
   */
  prefix: `/${string}/` | '/';
}

export class NanotronClientRequest {
  protected static versionPattern_ = new RegExp('^/v[0-9]+/');

  readonly url;

  readonly method;

  readonly raw_;

  /**
   * A flag to indicate if the running handlers queue has been terminated.
   * This can occur due to an error being thrown or by explicitly calling the `replyError` method.
   *
   * When `terminatedHandlers` is set to `true`, it signifies that the execution of the current
   * sequence of handlers (including pre, main, and post handlers) has been halted and no further
   * handlers in the queue will be executed.
   *
   * Usage:
   * - Check this flag to determine if the handlers queue has been interrupted.
   * - Set this flag to `true` to manually stop the execution of subsequent handlers.
   */
  terminatedHandlers?: true;

  readonly preHandlers_: RouteHandler[] = [];

  protected readonly logger_;

  protected readonly config_;

  constructor(
    clientRequest: IncomingMessage,
    config: NanotronClientRequestConfig,
  ) {
    // Store the raw request object and configuration.
    this.config_ = config;
    this.raw_ = clientRequest;

    // Parse request method.
    this.method = (this.raw_.method ?? 'GET').toUpperCase() as HttpMethod;

    // Parse request URL.
    let url = this.raw_.url ?? '';
    if (this.config_.prefix !== '/' && url.indexOf(this.config_.prefix) === 0) {
      url = url.slice(this.config_.prefix.length - 1);
    }
    url = url.replace(NanotronClientRequest.versionPattern_, '/');
    this.url = new URL(url, 'http://hostname/');

    // Create logger.
    this.logger_ = createLogger('nt-client-request'); // TODO: add client ip
    this.logger_.logMethodArgs?.('new', {method: this.method, url: this.url.pathname});
  }
}
