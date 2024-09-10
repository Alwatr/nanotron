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

  readonly replyHeaders: HttpResponseHeaders;

  protected replySent_ = false;
  get replySent(): boolean {
    return this.replySent_;
  }

  constructor(
    public incomingMessage: IncomingMessage,
    public serverResponse: ServerResponse,
    protected config_: NanotronApiConnectionConfig,
  ) {
    // Create logger.
    this.logger_ = createLogger('nanotron-api-connection'); // TODO: add client ip
    this.logger_.logMethodArgs?.('new', {method: incomingMessage.method, url: incomingMessage.url});

    // Parse request method.
    this.method = (this.incomingMessage.method ?? 'GET').toUpperCase() as HttpMethod;

    // Parse request URL.
    let url = this.incomingMessage.url ?? '';
    if (this.config_.prefix !== '/' && url.indexOf(this.config_.prefix) === 0) {
      url = url.slice(this.config_.prefix.length - 1);
    }
    url = url.replace(NanotronApiConnection.versionPattern_, '/');
    this.url = new URL(url, 'http://hostname/');

    // Set default reply headers.
    this.replyHeaders = {
      server: 'Alwatr Nanotron',
      'content-type': 'text/plain',
    };
  }

  get replyStatusCode(): HttpStatusCode {
    return this.serverResponse.statusCode as HttpStatusCode;
  }

  set replyStatusCode(value: HttpStatusCode) {
    this.serverResponse.statusCode = value;
  }

  protected applyReplyHeaders_() {
    this.logger_.logMethodArgs?.('applyReplyHeaders_', this.replyHeaders);
    for (const key in this.replyHeaders) {
      this.serverResponse.setHeader(key, this.replyHeaders[key as Lowercase<string>]!);
    }
  }

  replyJsonError(errorResponse: ErrorResponse): void {
    this.logger_.logMethodArgs?.('replyJsonError', {errorResponse});
    this.replyJson(errorResponse);
  }

  replyJson(responseJson: Json): void {
    this.logger_.logMethodArgs?.('replyJson', {responseJson});

    let responseString: string;
    try {
      responseString = JSON.stringify(responseJson);
    }
    catch (error) {
      this.logger_.error('replyJson', 'reply_json_stringify_failed', error, {
        url: this.url.pathname,
        method: this.method,
      });
      this.replyStatusCode = HttpStatusCodes.Error_Server_500_Internal_Server_Error;
      responseString = JSON.stringify({
        ok: false,
        errorCode: 'reply_json_stringify_failed',
        errorMessage: 'Failed to stringify response JSON.',
      } as ErrorResponse);
    }

    this.replyHeaders['content-type'] = 'application/json';
    this.reply(responseString);
  }

  replyError(error?: Error | unknown): void {
    this.logger_.logMethodArgs?.('replyError', {error});

    const statusCode = this.replyStatusCode;

    if (error === undefined || error instanceof Error === false) {
      this.replyJson({
        ok: false,
        errorCode: ('error_' + statusCode) as Lowercase<string>,
        errorMessage: HttpStatusMessages[statusCode]
      } as ErrorResponse);
      return;
    }

    this.replyJson({
      ok: false,
      errorCode: error.name,
      errorMessage: error.message,
    });
  }

}
