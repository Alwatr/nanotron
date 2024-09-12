import {URL} from 'node:url';

import type {HttpMethod} from './type.js';
import type {IncomingMessage} from 'node:http';

export class NanotronUrl extends URL {
  protected static versionPattern_ = new RegExp('^/v[0-9]+/');

  readonly method: HttpMethod;
  readonly debugId: string;

  constructor(clientRequest: IncomingMessage, prefix: `/${string}/` | '/') {
    let url = clientRequest.url ?? '';
    if (prefix !== '/' && url.indexOf(prefix) === 0) {
      url = url.slice(prefix.length - 1); // include `/`
    }
    url = url.replace(NanotronUrl.versionPattern_, '/');

    super(url, 'http://hostname/');

    this.method = (clientRequest.method ?? 'GET').toUpperCase() as HttpMethod;

    this.debugId = `[${this.method}]${this.pathname}`;
  }
}
