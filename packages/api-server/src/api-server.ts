import {createServer, IncomingMessage, ServerResponse} from 'node:http';

import {createLogger} from '@alwatr/logger';

import {NanotronApiConnection} from './api-connection.js';
import {HttpStatusCodes} from './const.js';

import type {HttpMethod, MatchType, RouteHandler} from './type.js';
import type {Dictionary} from '@alwatr/type-helper';
import type {Duplex} from 'node:stream';

/**
 * Configuration options for the NanotronApiServer.
 */
export interface NanotronApiServerConfig {
  /**
   * The port number to listen on.
   *
   * @default 80
   */
  port?: number;

  /**
   * The hostname to listen on.
   *
   * @default '0.0.0.0'
   */
  host?: string;

  /**
   * Sets the timeout (ms) for receiving the entire request from the client.
   *
   * @default 10_000 ms
   */
  requestTimeout?: number;

  /**
   * Sets the timeout (ms) for receiving the complete HTTP headers from the client.
   *
   * This should be bigger than `keepAliveTimeout + your server's expected response time`.
   *
   * @default 130_000 ms
   */
  headersTimeout?: number;

  /**
   * Sets the timeout (ms) for receiving the complete HTTP headers from the client.
   *
   * @default 120_000 ms
   */
  keepAliveTimeout?: number;

  /**
   * Add /health route.
   *
   * @default true
   */
  healthRoute?: boolean;

  /**
   * Add OPTIONS route for preflight requests to allow access all origins.
   *
   * @default false
   */
  allowAllOrigin?: boolean;

  /**
   * A prefix to be added to the beginning of the `url` of all defined routes.
   *
   * @default '/api/'
   */
  prefix?: `/${string}/` | '/';
}

/**
 * Configuration options for defining a route.
 */
export interface DefineRouteOption {
  /**
   * The HTTP method for this route.
   */
  method: HttpMethod;

  /**
   * The URL path for this route.
   */
  url: string;

  /**
   * The function to handle requests to this route.
   */
  handler: RouteHandler;

  /**
   * Specifies how the `url` should be matched against incoming requests.
   *
   * @default 'exact'
   */
  matchType?: MatchType;
}

export class NanotronApiServer {
  protected static readonly defaultConfig_: Readonly<Required<NanotronApiServerConfig>> = {
    host: '0.0.0.0',
    port: 80,
    requestTimeout: 10_000,
    headersTimeout: 130_000,
    keepAliveTimeout: 120_000,
    healthRoute: true,
    allowAllOrigin: false,
    prefix: '/api/',
  };

  protected readonly config_;
  protected readonly logger_;

  readonly httpServer;

  protected readonly routeHandlerList__: Record<MatchType, Dictionary<Dictionary<Required<DefineRouteOption>>>>;

  constructor(config?: Partial<NanotronApiServerConfig>) {
    // Merge the config with the default config.
    this.config_ = {
      ...NanotronApiServer.defaultConfig_,
      ...config,
    };

    // Create logger.
    this.logger_ = createLogger('nanotron-api-server' + (this.config_.port !== 80 ? ':' + this.config_.port : ''));
    this.logger_.logMethodArgs?.('new', {config: this.config_});

    // Bind methods.
    this.handleIncomingRequest_ = this.handleIncomingRequest_.bind(this);
    this.handleServerError_ = this.handleServerError_.bind(this);
    this.handleClientError_ = this.handleClientError_.bind(this);

    // Initialize route handler list.
    this.routeHandlerList__ = {
      exact: {},
      startsWith: {},
    };

    // Create the HTTP server.
    this.httpServer = createServer(
      {
        keepAlive: true,
        keepAliveInitialDelay: 0,
        noDelay: true,
      },
      this.handleIncomingRequest_,
    );

    // Configure the server.
    this.httpServer.requestTimeout = this.config_.requestTimeout;
    this.httpServer.keepAliveTimeout = this.config_.keepAliveTimeout;
    this.httpServer.headersTimeout = this.config_.headersTimeout;

    // Start the server.
    this.httpServer.listen(this.config_.port, this.config_.host, () => {
      this.logger_.logOther?.(`listening on ${this.config_.host}:${this.config_.port}`);
    });

    // Handle server errors.
    this.httpServer.on('error', this.handleServerError_);
    this.httpServer.on('clientError', this.handleClientError_);
  }
  close(): void {
    this.logger_.logMethod?.('close');
    this.httpServer.close();
  }

  protected getRouteOption_(option: Required<Pick<DefineRouteOption, 'method' | 'url'>>): Required<DefineRouteOption> | null {
    this.logger_.logMethodArgs?.('getRouteOption_', option);

    if (
      Object.hasOwn(this.routeHandlerList__.exact, option.method) &&
      Object.hasOwn(this.routeHandlerList__.exact[option.method], option.url)
    ) {
      return this.routeHandlerList__.exact[option.method][option.url];
    }

    if (Object.hasOwn(this.routeHandlerList__.startsWith, option.method)) {
      const routeList = this.routeHandlerList__.startsWith[option.method];
      for (const url in routeList) {
        if (url.indexOf(option.url) === 0) {
          return routeList[url];
        }
      }
    }

    this.logger_.incident?.('getRouteOption_', 'route_not_found', option);
    return null;
  }

  protected setRouteOption_(option: Required<DefineRouteOption>): void {
    this.logger_.logMethodArgs?.('setRouteOption_', {...option, handler: 'function'});

    const routeHandlerList = this.routeHandlerList__[option.matchType];

    routeHandlerList[option.method] ??= {};

    if (Object.hasOwn(routeHandlerList[option.method], option.url)) {
      this.logger_.error('defineRoute', 'route_already_exists', {...option, handler: 'function'});
      throw new Error('route_already_exists');
    }

    routeHandlerList[option.method][option.url] = option;
  }
}
