import './global.js';
import {createLogger} from './logger.js';

Alwatr.packages ??= {};

const logger = createLogger('logger');

setTimeout(() => {
  if ('registeredList' in Alwatr) {
    logger.accident?.('define-package', 'duplicate_old_package_defined', Alwatr.registeredList);
  }
}, 2000);

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
