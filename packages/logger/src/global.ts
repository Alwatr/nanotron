export interface GlobalAlwatr {
  packages: Record<string, string>;
}

declare global {
  // eslint-disable-next-line no-var
  var Alwatr: GlobalAlwatr;
}

export const globalScope =
  (typeof globalThis === 'object' && globalThis) ||
  ('object' === typeof window && window) ||
  ('object' === typeof global && global) ||
  self;

globalScope.Alwatr ??= {packages: {}};

export const NODE_MODE = typeof process !== 'undefined';
export const DEV_MODE = NODE_MODE
  ? process.env.ALWATR_DEBUG === '1'
  : globalScope.localStorage?.getItem('alwatrDebug') === '1';
