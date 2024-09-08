import {createServer} from 'node:http';

import {createLogger, definePackage, type AlwatrLogger} from '@alwatr/logger';
import {isNumber} from '@alwatr/math';

import type {NanoServerConfig, ConnectionConfig} from './type.js';
import type {
  AlwatrServiceResponse,
  AlwatrServiceResponseFailed,
  AlwatrServiceResponseSuccess,
  AlwatrServiceResponseSuccessWithMeta,
  MaybePromise,
  Methods,
  ParamKeyType,
  ParamValueType,
  QueryParameters,
  Stringifyable,
  StringifyableRecord,
  UserAuth,
} from '@alwatr/type';
import type {IncomingMessage, ServerResponse} from 'node:http';
import type {Duplex} from 'node:stream';

export type RouteMiddleware<
  TData extends Stringifyable = Stringifyable,
  TMeta extends StringifyableRecord = StringifyableRecord,
> = (connection: AlwatrConnection) => MaybePromise<AlwatrServiceResponse<TData, TMeta> | null>;

export type {
  NanoServerConfig,
  ConnectionConfig,
  AlwatrServiceResponse,
  AlwatrServiceResponseFailed,
  AlwatrServiceResponseSuccess,
  AlwatrServiceResponseSuccessWithMeta,
};

definePackage('nano-server', '1.x');

export class AlwatrNanoServer {
  protected _config: NanoServerConfig;
  protected _logger: AlwatrLogger;

  /**
   * Core HTTP Server.
   */
  httpServer;

  /**
   * Create a server for nanoservice use cases.
   *
   * Example:
   *
   * ```ts
   * import {AlwatrNanoServer} from '@alwatr/nano-server';
   * const nanoServer = new AlwatrNanoServer();
   *
   * nanoServer.route('GET', '/', async (connection) => {
   *   ok: true,
   *   data: {
   *    app: 'Alwatr Nanoservice Starter Kit',
   *    message: 'Hello ;)',
   *   },
   *  };
   * );
   * ```
   */
  constructor(config?: Partial<NanoServerConfig>) {
    this._config = {
      host: '0.0.0.0',
      port: 80,
      requestTimeout: 10_000,
      headersTimeout: 130_000,
      keepAliveTimeout: 120_000,
      healthRoute: true,
      allowAllOrigin: false,
      prefixPattern: 'api',
      ...config,
    };

    this._logger = createLogger('alwatr/nano-server' + (this._config.port !== 80 ? ':' + this._config.port : ''));
    this._logger.logMethodArgs?.('constructor', {config: this._config});

    this._requestListener = this._requestListener.bind(this);
    this._errorListener = this._errorListener.bind(this);
    this._clientErrorListener = this._clientErrorListener.bind(this);
    this._onHealthCheckRequest = this._onHealthCheckRequest.bind(this);
    this.httpServer = createServer(
      {
        keepAlive: true,
        keepAliveInitialDelay: 0,
        noDelay: true,
      },
      this._requestListener,
    );
    this.httpServer.requestTimeout = this._config.requestTimeout;
    this.httpServer.keepAliveTimeout = this._config.keepAliveTimeout;
    this.httpServer.headersTimeout = this._config.headersTimeout;

    this.httpServer.on('error', this._errorListener);
    this.httpServer.on('clientError', this._clientErrorListener);

    if (this._config.healthRoute === true) {
      this.route('GET', '/health', this._onHealthCheckRequest);
    }

    if (this._config.allowAllOrigin === true) {
      this.route('OPTIONS', 'all', this._onHOptionRequest);
    }

    this.httpServer.listen(this._config.port, this._config.host, () => {
      this._logger.logOther?.(`listening on ${this._config.host}:${this._config.port}`);
    });
  }

  /**
   * Stops the HTTP server from accepting new connections.
   *
   * Example:
   *
   * ```ts
   * nanoserver.close();
   * ```
   */
  close(): void {
    this._logger.logMethod?.('close');
    this.httpServer.close();
  }

  /**
   * Refers to how an application’s endpoints (URIs) respond to client requests.
   *
   * @param method - Acceptable methods.
   * @param route - Acceptable request path.
   * @param middleware - Request handler.
   *
   * Example:
   *
   * ```ts
   * nanoServer.route('GET', '/', async (connection) => {
   * return {
   *   ok: true,
   *   data: {
   *    app: 'Alwatr Nanoservice Starter Kit',
   *    message: 'Hello ;)',
   *   },
   *  });
   * };
   * ```
   */
  route<TData extends Stringifyable = Stringifyable, TMeta extends StringifyableRecord = StringifyableRecord>(
    method: 'ALL' | Methods,
    route: 'all' | `/${string}`,
    middleware: RouteMiddleware<TData, TMeta>,
  ): void {
    this._logger.logMethodArgs?.('route', {method, route});

    if (this.middlewareList[method] == null) this.middlewareList[method] = {};

    if (typeof this.middlewareList[method][route] === 'function') {
      this._logger.accident('route', 'route_already_exists', {
        method,
        route,
      });
      throw new Error('route_already_exists');
    }

    this.middlewareList[method][route] = middleware as RouteMiddleware;
  }

  /**
   * Responds to the request.
   *
   * Example:
   * ```ts
   * nanoServer.route('GET', '/', async (connection) => {
   *   return {
   *     ok: true,
   *     data: {
   *      app: 'Alwatr Nanoservice Starter Kit',
   *      message: 'Hello ;)',
   *     },
   *    };
   * });
   * ```
   */
  reply(serverResponse: ServerResponse, content: AlwatrServiceResponse<Stringifyable, StringifyableRecord>): void {
    content.statusCode ??= 200;
    this._logger.logMethodArgs?.('reply', {ok: content.ok, statusCode: content.statusCode});

    if (serverResponse.headersSent) {
      this._logger.error('reply', 'http_header_sent', 'Response headers already sent');
      if (content.ok === false) return; // prevent loop.
      throw new Error('http_header_sent');
    }

    if (!this._logger.devMode && !content.ok && content.meta) {
      // clear debug info from client for security reasons.
      delete content.meta;
    }

    let buffer: Buffer;

    try {
      buffer = Buffer.from(JSON.stringify(content), 'utf8');
    }
    catch (err) {
      this._logger.accident('responseData', 'data_stringify_failed', err);
      return this.reply(
        serverResponse,
        content.ok === false
          ? {
            ok: false,
            statusCode: content.statusCode,
            errorCode: content.errorCode,
          }
          : {
            ok: false,
            statusCode: 500,
            errorCode: 'data_stringify_failed',
          },
      );
    }

    const headers: Record<string, string | number> = {
      'Content-Length': buffer.byteLength,
      'Content-Type': 'application/json',
      Server: 'Alwatr NanoServer',
    };

    if (this._config.allowAllOrigin === true) {
      headers['Access-Control-Allow-Origin'] = '*';
    }

    try {
      serverResponse.writeHead(content.statusCode ?? 200, headers);
      serverResponse.end(buffer, 'binary');
    }
    catch (err) {
      this._logger.error('reply', 'reply_failed', err);
    }
  }

  protected _errorListener(err: NodeJS.ErrnoException): void {
    if (err.code === 'EADDRINUSE') {
      this._logger.incident?.('server.onError', 'address_in_use', err);
      setTimeout(() => {
        this.httpServer.close();
        this.httpServer.listen(this._config.port, this._config.host, () => {
          this._logger.logOther?.(`listening on ${this._config.host}:${this._config.port}`);
        });
      }, 2000);
    }
    else {
      this._logger.error('server.onError', 'http_server_catch_error', err.message || 'HTTP server catch an error', err);
    }
  }

  protected _clientErrorListener(err: NodeJS.ErrnoException, socket: Duplex): void {
    this._logger.accident('server.clientError', 'http_server_catch_client_error', {
      errCode: err.code,
      errMessage: err.message,
    });
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  }

  protected _onHealthCheckRequest(connection: AlwatrConnection): null {
    const body = 'ok';
    connection.serverResponse.writeHead(200, {
      'Content-Length': body.length,
      'Content-Type': 'plain/text',
      Server: 'Alwatr NanoServer',
    });
    connection.serverResponse.end(body);

    return null;
  }

  protected _onHOptionRequest(connection: AlwatrConnection): null {
    connection.serverResponse.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    });
    connection.serverResponse.end();

    return null;
  }

  // prettier-ignore
  protected middlewareList: Record<string, Record<string, RouteMiddleware>> = {
    ALL: {},
  };

  protected async _requestListener(incomingMessage: IncomingMessage, serverResponse: ServerResponse): Promise<void> {
    this._logger.logMethod?.('handleRequest');

    if (incomingMessage.url == null) {
      this._logger.accident('handleRequest', 'http_server_url_undefined');
      return;
    }

    if (incomingMessage.method == null) {
      this._logger.accident('handleRequest', 'http_server_method_undefined');
      return;
    }

    const connection = new AlwatrConnection(incomingMessage, serverResponse, {
      allowAllOrigin: this._config.allowAllOrigin,
      prefixPattern: this._config.prefixPattern,
    });
    const route = connection.url.pathname;

    // TODO: handled open remained connections.

    const middleware =
      this.middlewareList[connection.method]?.[route] ||
      this.middlewareList.ALL[route] ||
      this.middlewareList[connection.method]?.all ||
      this.middlewareList.ALL.all ||
      this._notFoundListener;

    try {
      const content = await middleware(connection);
      if (content !== null) {
        this.reply(serverResponse, content);
      }
    }
    catch (errorObject) {
      if (typeof errorObject === 'object' && errorObject != null && 'ok' in errorObject) {
        this.reply(serverResponse, errorObject as AlwatrServiceResponse<StringifyableRecord, StringifyableRecord>);
      }
      else {
        const err = errorObject as Error;
        // 500 status code
        this._logger.error('handleRequest', 'http_server_middleware_error', err, {
          method: connection.method,
          route,
        });
        this.reply(serverResponse, {
          ok: false,
          statusCode: 500,
          errorCode: 'http_server_middleware_error',
          meta: {
            name: err?.name,
            message: err?.message,
            cause: err?.cause as StringifyableRecord,
          },
        });
      }
    }
  }

  protected _notFoundListener = (connection: AlwatrConnection): AlwatrServiceResponseFailed => {
    return (
      connection.serverResponse,
      {
        ok: false,
        statusCode: 404,
        errorCode: 'not_found',
        meta: {
          method: connection.method,
          route: connection.url.pathname,
        },
      }
    );
  };
}

/**
 * Alwatr Connection
 */
export class AlwatrConnection {
  static _versionPattern = new RegExp('^/v[0-9]+');

  /**
   * Request URL.
   */
  readonly url = new URL(
    (this.incomingMessage.url ?? '')
      .replace(new RegExp('^/' + this._config.prefixPattern), '')
      .replace(AlwatrConnection._versionPattern, ''),
    'http://localhost/',
  );

  /**
   * Request method.
   */
  readonly method = (this.incomingMessage.method ?? 'GET').toUpperCase() as Methods;

  protected _logger = createLogger('alwatr/nano-server-connection');

  constructor(
    public incomingMessage: IncomingMessage,
    public serverResponse: ServerResponse,
    protected _config: ConnectionConfig,
  ) {
    this._logger.logMethodArgs?.('constructor', {method: incomingMessage.method, url: incomingMessage.url});
  }

  /**
   * Get the token placed in the request header.
   */
  getAuthBearer(): string | null {
    const auth = this.incomingMessage.headers.authorization?.split(' ');

    if (auth == null || auth[0].toLowerCase() !== 'bearer') {
      return null;
    }

    return auth[1];
  }

  /**
   * Get request body for POST, PUT and POST methods.
   *
   * Example:
   * ```ts
   * const body = await connection.getBody();
   * ```
   */
  async getBody(): Promise<string | null> {
    // method must be POST or PUT or PATCH
    if (!(this.method === 'POST' || this.method === 'PUT' || this.method === 'PATCH')) {
      return null;
    }

    let body = '';

    this.incomingMessage.on('data', (chunk: unknown) => {
      body += chunk;
    });

    await new Promise((resolve) => this.incomingMessage.once('end', resolve));

    return body;
  }

  /**
   * Parse request body.
   *
   * @returns Request body.
   *
   * Example:
   * ```ts
   * const bodyData = await connection.requireJsonBody();
   * ```
   */
  async requireJsonBody<T extends StringifyableRecord>(): Promise<T> {
    // if request content type is json
    if (this.incomingMessage.headers['content-type'] !== 'application/json') {
      // eslint-disable-next-line no-throw-literal
      throw {
        ok: false,
        statusCode: 400,
        errorCode: 'require_json_body',
      };
    }

    const body = await this.getBody();

    if (body == null || body.length === 0) {
      // eslint-disable-next-line no-throw-literal
      throw {
        ok: false,
        statusCode: 400,
        errorCode: 'require_body',
      };
    }

    try {
      return JSON.parse(body) as T;
    }
    catch (err) {
      // eslint-disable-next-line no-throw-literal
      throw {
        ok: false,
        statusCode: 400,
        errorCode: 'invalid_json',
      };
    }
  }

  /**
   * Parse and validate request token.
   *
   * @returns Request token.
   *
   * Example:
   * ```ts
   * const token = connection.requireToken((token) => token.length > 12);
   * if (token == null) return;
   * ```
   */
  requireToken(validator?: ((token: string) => boolean) | string[] | string): string {
    const token = this.getAuthBearer();

    if (token == null) {
      throw {
        ok: false,
        statusCode: 401,
        errorCode: 'authorization_required',
      };
    }
    else if (validator === undefined) {
      return token;
    }
    else if (typeof validator === 'string') {
      if (token === validator) return token;
    }
    else if (Array.isArray(validator)) {
      if (validator.includes(token)) return token;
    }
    else if (typeof validator === 'function') {
      if (validator(token) === true) return token;
    }
    throw {
      ok: false,
      statusCode: 403,
      errorCode: 'access_denied',
    };
  }

  /**
   * Parse and get request user auth (include id and token).
   *
   * Example:
   * ```ts
   * const userAuth = connection.requireUserAuth();
   * ```
   */
  getUserAuth(): UserAuth | null {
    const auth = this.getAuthBearer()
      ?.split('/')
      .filter((item) => item.trim() !== '');

    return auth == null || auth.length !== 2
      ? null
      : {
        id: auth[0],
        token: auth[1],
      };
  }

  /**
   * Parse query param and validate with param type.
   */
  protected _sanitizeParam(name: string, type: ParamKeyType): ParamValueType | null {
    let value = this.url.searchParams.get(name);

    if (value == null || value === '') {
      return null;
    }

    if (type === 'string') {
      return value;
    }

    if (type === 'number') {
      return isNumber(value) ? +value : null;
    }

    if (type === 'boolean') {
      value = value.trim();

      if (value === 'true' || value === '1') {
        return true;
      }
      else if (value === 'false' || value === '0') {
        return false;
      }
      else return null;
    }

    return null;
  }

  /**
   * Parse and validate query params.
   *
   * @returns Query params object.
   *
   * Example:
   * ```ts
   * const params = connection.requireQueryParams<{id: string}>({id: 'string'});
   * console.log(params.id);
   * ```
   */
  requireQueryParams<T extends QueryParameters = QueryParameters>(params: Record<string, ParamKeyType>): T {
    const parsedParams: Record<string, ParamValueType | null> = {};

    for (const paramName in params) {
      if (!Object.prototype.hasOwnProperty.call(params, paramName)) continue;
      const paramType = params[paramName];
      const paramValue = (parsedParams[paramName] = this._sanitizeParam(paramName, paramType));
      if (paramValue == null) {
        // eslint-disable-next-line no-throw-literal
        throw {
          ok: false,
          statusCode: 406,
          errorCode: 'query_parameter_required',
          meta: {
            paramName,
            paramType,
            paramValue,
          },
        };
      }
    }

    return parsedParams as T;
  }

  getRemoteAddress(): string {
    // prettier-ignore
    return (
      this.incomingMessage.headers['x-forwarded-for']
        ?.split(',')
        .pop()
        ?.trim() ||
      this.incomingMessage.socket.remoteAddress ||
      'unknown'
    );
  }

  requireClientId(): string {
    const clientId = this.incomingMessage.headers['client-id'];

    if (!clientId) {
      // eslint-disable-next-line no-throw-literal
      throw {
        ok: false,
        statusCode: 401,
        errorCode: 'client_denied',
      };
    }

    return clientId;
  }
}
