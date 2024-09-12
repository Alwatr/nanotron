import {createLogger} from '@alwatr/logger';

import {NanotronServerResponse} from './api-server-response.js';

import type {DefineRouteOption, NativeClientRequest, NativeServerResponse} from './type.js';
import type {NanotronUrl} from './url.js';
import type {Dictionary} from '@alwatr/type-helper';

export class NanotronClientRequest {
  readonly url: NanotronUrl;

  readonly serverResponse: NanotronServerResponse;

  readonly routeOption: DefineRouteOption | null;

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

  readonly sharedMeta: Dictionary = {};

  readonly raw_: NativeClientRequest;

  protected readonly logger_;

  constructor(
    url: NanotronUrl,
    nativeClientRequest: NativeClientRequest,
    nativeServerResponse: NativeServerResponse,
    routeOption: DefineRouteOption | null,
  ) {
    // Store public properties.
    this.raw_ = nativeClientRequest;
    this.url = url;
    this.routeOption = routeOption;

    // Create logger.
    this.logger_ = createLogger('nt-client-request'); // TODO: add client ip
    this.logger_.logMethodArgs?.('new', url.debugId);

    // Create server response.
    this.serverResponse = new NanotronServerResponse(this, nativeServerResponse);
  }
}
