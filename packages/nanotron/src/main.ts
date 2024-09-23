import {definePackage} from '@alwatr/logger';

import type {} from '@alwatr/nano-build';

export * from '@alwatr/nanotron-api-server';
export * from '@alwatr/crypto';

definePackage('@alwatr/nanotron', __package_version__);
