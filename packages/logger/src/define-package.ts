import {createLogger} from './logger.js';

import type {} from './type.js';

globalThis.Alwatr ??= {packages: {}};
Alwatr.packages ??= {};

const logger = createLogger('logger');

export const definePackage = (packageName: string, version: string) => {
  logger.logMethodArgs?.('define-package', {packageName, version});

  if (packageName in Alwatr.packages) {
    logger.accident?.('define-package', 'duplicate_package_defined', {
      packageName,
      new: version,
      old: Alwatr.packages[packageName],
    });
    return;
  }

  Alwatr.packages[packageName] = version;
};

definePackage('logger', '2.x');
