
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

