import type { NanotronApiConnection } from './api-connection.js';
import type { Json, MaybePromise } from '@alwatr/type-helper';

declare module 'http' {
  interface IncomingHttpHeaders {
    'x-forwarded-for'?: string;
  }
}

export type MatchType = 'exact' | 'startsWith';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE';

/**
 * Represents the collection of HTTP response headers.
 */
export interface HttpResponseHeaders {
  /**
   * Indicates if the server supports range requests for the target resource.
   */
  'accept-ranges'?: string;

  /**
   * Specifies the time in seconds the object has been in a proxy cache.
   */
  'age'?: string;

  /**
   * Lists the set of HTTP methods supported by the resource identified by the Request-URI.
   */
  'allow'?: string;

  /**
   * Specifies caching directives for both requests and responses.
   */
  'cache-control'?: string;

  /**
   * Controls whether the network connection stays open after the current transaction.
   */
  'connection'?: string;

  /**
   * Suggests a filename for the downloaded resource or how the content should be displayed.
   */
  'content-disposition'?: string;

  /**
   * Indicates what content encodings have been applied to the entity-body.
   */
  'content-encoding'?: string;

  /**
   * Describes the natural language(s) of the intended audience for the enclosed entity.
   */
  'content-language'?: string;

  /**
   * Indicates the size of the entity-body, in bytes, sent to the recipient.
   */
  'content-length'?: string | number;

  /**
   * Indicates an alternate location for the returned data.
   */
  'content-location'?: string;

  /**
   * Indicates where in a full body message a partial message belongs.
   */
  'content-range'?: string;

  /**
   * Indicates the media type of the entity-body sent to the recipient.
   */
  'content-type'?: string;

  /**
   * Indicates the date and time at which the message was originated.
   */
  'date'?: string;

  /**
   * Provides the current value of the entity tag for the requested variant.
   */
  'etag'?: string;

  /**
   * Gives the date/time after which the response is considered stale.
   */
  'expires'?: string;

  /**
   * Indicates the date and time at which the origin server believes the variant was last modified.
   */
  'last-modified'?: string;

  /**
   * Provides a list of URIs associated with the resource.
   */
  'link'?: string;

  /**
   * Used in redirection, or when a new resource has been created.
   */
  'location'?: string;

  /**
   * Used for backward compatibility with HTTP/1.0 caches.
   */
  'pragma'?: string;

  /**
   * Requests authentication information from the client for a proxy server.
   */
  'proxy-authenticate'?: string;

  /**
   * Indicates how long the user agent should wait before making a follow-up request.
   */
  'retry-after'?: string;

  /**
   * Contains information about the software used by the origin server to handle the request.
   */
  'server'?: string;

  /**
   * Used to send cookies from the server to the user agent.
   */
  'set-cookie'?: string[];

  /**
   * Tells browsers to access the server using HTTPS only.
   */
  'strict-transport-security'?: string;

  /**
   * Allows the sender to include additional fields at the end of chunked messages.
   */
  'trailer'?: string;

  /**
   * Specifies the form of encoding used to safely transfer the entity to the user.
   */
  'transfer-encoding'?: string;

  /**
   * Determines how to match future request headers to decide whether a cached response
   * can be used rather than requesting a fresh one from the origin server.
   */
  'vary'?: string;

  /**
   * Lists all intermediate proxies the message has traversed
   */
  'via'?: string;

  /**
   * Contains additional information about the status or transformation of a message that might not be reflected in the status code.
   */
  'warning'?: string;

  /**
   * Indicates the authentication scheme that should be used to access the requested entity.
   */
  'www-authenticate'?: string;

  // Additional headers can be added here as needed
  [headerName: Lowercase<string>]: string | string[] | number | undefined;
}

export type ErrorResponse = {
  ok: false;
  errorCode: Lowercase<string>;
  errorMessage: string;
  meta?: Json;
}

