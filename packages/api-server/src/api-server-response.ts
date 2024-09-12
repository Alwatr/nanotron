import {createLogger} from '@alwatr/logger';

import {type HttpStatusCode, HttpStatusCodes, HttpStatusMessages} from './const.js';

import type {NanotronClientRequest} from './api-client-request.js';
import type {HttpResponseHeaders, ErrorResponse, NativeServerResponse} from './type.js';
import type {Json} from '@alwatr/type-helper';

/**
 * Configuration options for the Nanotron Api Server Response.
 */
export interface NanotronServerResponseConfig {
  clientRequest: NanotronClientRequest;
}

export class NanotronServerResponse {
  readonly clientRequest: NanotronClientRequest;

  readonly raw_: NativeServerResponse;

  readonly headers: HttpResponseHeaders;

  protected readonly logger_;

  protected hasBeenSent_ = false;
  get hasBeenSent(): boolean {
    return this.hasBeenSent_;
  }

  constructor(nanotronClientRequest: NanotronClientRequest, nativeServerResponse: NativeServerResponse) {
    // Store public properties.
    this.clientRequest = nanotronClientRequest;
    this.raw_ = nativeServerResponse;

    // Create logger.
    this.logger_ = createLogger('nt-server-response'); // TODO: add client ip
    this.logger_.logMethodArgs?.('new', this.clientRequest.url.debugId);

    // Set default reply headers.
    this.headers = {
      server: 'Alwatr Nanotron',
      'content-type': 'text/plain',
    };
  }

  get statusCode(): HttpStatusCode {
    return this.raw_.statusCode as HttpStatusCode;
  }

  set statusCode(value: HttpStatusCode) {
    this.raw_.statusCode = value;
  }

  protected applyHeaders_() {
    this.logger_.logMethodArgs?.('applyHeaders_', this.headers);
    for (const key in this.headers) {
      this.raw_.setHeader(key, this.headers[key as Lowercase<string>]!);
    }
  }

  replyErrorResponse(errorResponse: ErrorResponse): void {
    this.logger_.logMethod?.('replyErrorResponse');
    this.clientRequest.terminatedHandlers = true;
    this.replyJson(errorResponse);
  }

  replyError(error?: Error | string | Json | unknown): void {
    this.logger_.logMethodArgs?.('replyError', {error});

    this.clientRequest.terminatedHandlers = true;
    let statusCode = this.statusCode;

    if (statusCode < HttpStatusCodes.Error_Client_400_Bad_Request) {
      this.statusCode = statusCode = 500;
    }

    if (error instanceof Error) {
      this.replyJson({
        ok: false,
        errorCode: error.name === 'Error' ? (('error_' + statusCode) as Lowercase<string>) : (error.name + '').toLowerCase(),
        errorMessage: error.message,
      });
    }
    else if (typeof error === 'string') {
      this.replyJson({
        ok: false,
        errorCode: ('error_' + statusCode) as Lowercase<string>,
        errorMessage: error,
      });
    }
    else if (typeof error === 'object' && error !== null) {
      this.replyJson(error as Json);
    }
    else {
      this.replyJson({
        ok: false,
        errorCode: ('error_' + statusCode) as Lowercase<string>,
        errorMessage: HttpStatusMessages[statusCode],
      } as ErrorResponse);
    }
  }

  replyJson(responseJson: Json): void {
    this.logger_.logMethodArgs?.('replyJson', {responseJson});

    let responseString: string;
    try {
      responseString = JSON.stringify(responseJson);
    }
    catch (error) {
      this.logger_.error('replyJson', 'reply_json_stringify_failed', error, this.clientRequest.url.debugId);
      this.statusCode = HttpStatusCodes.Error_Server_500_Internal_Server_Error;
      responseString = JSON.stringify({
        ok: false,
        errorCode: 'reply_json_stringify_failed',
        errorMessage: 'Failed to stringify response JSON.',
      } as ErrorResponse);
    }

    this.headers['content-type'] = 'application/json';
    this.reply(responseString);
  }

  reply(context: string | Buffer): void {
    this.logger_.logMethodArgs?.('reply', this.clientRequest.url.debugId);

    if (this.raw_.writableFinished && this.hasBeenSent_ === false) {
      // The response has already been sent by direct access to the server api.
      this.logger_.accident('reply', 'server_response_writable_finished_directly');
      this.hasBeenSent_ = true;
    }

    if (this.hasBeenSent_) {
      this.logger_.accident('reply', 'reply_already_sent', {
        url: this.clientRequest.url.debugId,
        replySent: this.hasBeenSent_,
        writableFinished: this.raw_.writableFinished,
      });
      return;
    }

    this.hasBeenSent_ = true;

    try {
      if (typeof context === 'string') {
        context = Buffer.from(context);
      }

      this.headers['content-length'] = context.byteLength;

      this.applyHeaders_();
      this.raw_.end(context, 'binary');
    }
    catch (error) {
      this.logger_.error('reply', 'server_response_error', error, this.clientRequest.url.debugId);
      this.hasBeenSent_ = false;
    }
  }
}
