# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 4.0.0-alpha.0 (2024-09-10)

### ⚠ BREAKING CHANGES

* **crypto:** new api
* **crypto/api:** rename AlwatrUserGenerator to AlwatrCryptoFactory and change config
* **crypto/user:** methods name updated
* **crypto/token:** methods name updated
* **crypto/hash:** methods name updated

### Features

* **crypto/api:**  AlwatrCryptoFactory with secret and device id ([2d754a1](https://github.com/Alwatr/nanotron/commit/2d754a19b2f04f64d0828e31ba004fc192f466d3)) by @
* **crypto/api:**  device id generator preconfig ([71e80d6](https://github.com/Alwatr/nanotron/commit/71e80d63743579505a6be17d014c364e9f6cf55c)) by @
* **crypto/hash:** review and update all methods and documents ([14acd26](https://github.com/Alwatr/nanotron/commit/14acd265a19b1b67bd32f725468fe66985464fe6)) by @
* **crypto/preConfig:** update prefix and secret algorithm ([0cfff12](https://github.com/Alwatr/nanotron/commit/0cfff124e692d02aad0b5c97908df63bc692f896)) by @
* **crypto/token:** review and update all methods and documents ([dc943f8](https://github.com/Alwatr/nanotron/commit/dc943f8a007567b58e9e3b7f9cada556ac76ae9b)) by @
* **crypto/user:** review and update all methods and documents ([bb79fa8](https://github.com/Alwatr/nanotron/commit/bb79fa81f8632d5fe75cac813238b04094d0bb6a)) by @
* **crypto:** complete rewrite with new api ([3d56861](https://github.com/Alwatr/nanotron/commit/3d56861a2857e760c7cd5f03be98f003738fc7a9)) by @
* **crypto:** prefix option ([6be5c90](https://github.com/Alwatr/nanotron/commit/6be5c90dad4674e8ae3e27611a13dcf1e08ce11a)) by @
* **crypto:** rename user file to api ([52343ea](https://github.com/Alwatr/nanotron/commit/52343ead04c23f50bedac2caa01f46bf489ab318)) by @
* **yarn:** pnp ([b6a562c](https://github.com/Alwatr/nanotron/commit/b6a562c909a35b3e626442e5c325da3fce448e1b)) by @

### Bug Fixes

* build issue after update package.json ([9df6a58](https://github.com/Alwatr/nanotron/commit/9df6a5866d2b5542e89788f1cf2a1bea5cc369d3)) by @njfamirm
* **crypto:** compatible with new logger api ([f867317](https://github.com/Alwatr/nanotron/commit/f8673178d18f14276e13dcb35a7d973f301a722b)) by @
* **crypto:** use import type ([30e3bac](https://github.com/Alwatr/nanotron/commit/30e3bacb187d58417cb62e2a1511de4ade3f80c0)) by @
* move repo urls ([719aa3e](https://github.com/Alwatr/nanotron/commit/719aa3e7462d3c9c6272958fc93f89fda6793fb1)) by @
* package repo urls ([466cbe9](https://github.com/Alwatr/nanotron/commit/466cbe9188f24e1a1bc36d879a95b52538a58f16)) by @

### Code Refactoring

* change build config and remove tslib ([81eabfa](https://github.com/Alwatr/nanotron/commit/81eabfa7ba4db432333f11f854e054304e80e922)) by @
* rename core ro packages ([680604f](https://github.com/Alwatr/nanotron/commit/680604fb6af49273e5ad0745194b7186cb818faa)) by @
* Update import paths for duration parsing ([97dd8aa](https://github.com/Alwatr/nanotron/commit/97dd8aa68e050127e444ef268e48246b6b7318c6)) by @AliMD
* Update import paths for duration parsing and update typescript SDK version to 5.6.2 ([7d8ea97](https://github.com/Alwatr/nanotron/commit/7d8ea97ed8d7741e26d3a609b30e42992d9fb051)) by @AliMD

### Miscellaneous Chores

* add required deps ([32b8ade](https://github.com/Alwatr/nanotron/commit/32b8adeba96dbd68879d004fe44f2f2c88b2b624)) by @njfamirm
* **crypto:** define package version ([cd54226](https://github.com/Alwatr/nanotron/commit/cd5422634edf7f29f19fb7fccc880397c02c18c0)) by @
* **deps-dev:** bump the development-dependencies group with 1 update ([97fcdb3](https://github.com/Alwatr/nanotron/commit/97fcdb3487be289c3c6a718335fea9ba441bfef9)) by @
* **deps-dev:** bump the development-dependencies group with 1 update ([0e580fa](https://github.com/Alwatr/nanotron/commit/0e580fa23274e6ddc626512b00ba5b7612ad9ed4)) by @
* **deps-dev:** bump the development-dependencies group with 12 updates ([c908185](https://github.com/Alwatr/nanotron/commit/c908185df0bdd4acf361382ec6c1cfbcf6667256)) by @
* **deps-dev:** bump the development-dependencies group with 4 updates ([0334169](https://github.com/Alwatr/nanotron/commit/033416915a9b8a6d62ce5d1831c31ff953f6c54c)) by @
* **deps-dev:** bump the development-dependencies group with 5 updates ([64f796d](https://github.com/Alwatr/nanotron/commit/64f796ddfb8b1073da586cfdf526172b20b70903)) by @
* **deps-dev:** bump the development-dependencies group with 9 updates ([4d50729](https://github.com/Alwatr/nanotron/commit/4d50729cdc8d0fdb6d5a9c0c3b98e3d9ad057a1b)) by @
* **deps-dev:** bump the development-dependencies group with 9 updates ([e0f9bde](https://github.com/Alwatr/nanotron/commit/e0f9bdeb13fae513334c56d8e6414caca0611fab)) by @
* rename project ([3f54d28](https://github.com/Alwatr/nanotron/commit/3f54d289c004ee1454f4906ad46baca7e3060d16)) by @
* update package.json of each package from nanolib ([b8a7c8a](https://github.com/Alwatr/nanotron/commit/b8a7c8af9f88d36ac3c1ab6324b78890dc2023b3)) by @njfamirm
* update repository url ([3d96754](https://github.com/Alwatr/nanotron/commit/3d96754b11740b18c02e4f11f6a559f90b09d726)) by @
* **yarn:** fix packages version ([aaf3818](https://github.com/Alwatr/nanotron/commit/aaf381844ac253e9b0e5ffaf2e039a33edee0668)) by @

### Dependencies update

* update ([f95134f](https://github.com/Alwatr/nanotron/commit/f95134fe5a4b61ee01eb84450807efb9ef099010)) by @AliMD

## [3.0.4](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/crypto@3.0.3...@alwatr/crypto@3.0.4) (2023-12-19)

**Note:** Version bump only for package @alwatr/crypto

## [3.0.3](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/crypto@3.0.2...@alwatr/crypto@3.0.3) (2023-12-19)

**Note:** Version bump only for package @alwatr/crypto

## [3.0.2](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/crypto@3.0.1...@alwatr/crypto@3.0.2) (2023-12-11)

**Note:** Version bump only for package @alwatr/crypto

## [3.0.1](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/crypto@3.0.0...@alwatr/crypto@3.0.1) (2023-12-11)

**Note:** Version bump only for package @alwatr/crypto

# [3.0.0](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/crypto@2.0.0...@alwatr/crypto@3.0.0) (2023-12-09)

### Bug Fixes

* **crypto:** use import type ([30e3bac](https://github.com/Alwatr/alwatr-es-sdk/commit/30e3bacb187d58417cb62e2a1511de4ade3f80c0)) by @njfamirm

### Features

* **crypto/api:**  AlwatrCryptoFactory with secret and device id ([2d754a1](https://github.com/Alwatr/alwatr-es-sdk/commit/2d754a19b2f04f64d0828e31ba004fc192f466d3)) by @njfamirm
* **crypto/api:**  device id generator preconfig ([71e80d6](https://github.com/Alwatr/alwatr-es-sdk/commit/71e80d63743579505a6be17d014c364e9f6cf55c)) by @njfamirm
* **crypto:** complete rewrite with new api ([3d56861](https://github.com/Alwatr/alwatr-es-sdk/commit/3d56861a2857e760c7cd5f03be98f003738fc7a9)) by @AliMD
* **crypto:** rename user file to api ([52343ea](https://github.com/Alwatr/alwatr-es-sdk/commit/52343ead04c23f50bedac2caa01f46bf489ab318)) by @njfamirm

### BREAKING CHANGES

* **crypto:** new api
* **crypto/api:** rename AlwatrUserGenerator to AlwatrCryptoFactory and change config

# [2.0.0](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.2.1...@alwatr/crypto@2.0.0) (2023-11-29)

### Features

* **crypto/hash:** review and update all methods and documents ([14acd26](https://github.com/Alwatr/eslib/commit/14acd265a19b1b67bd32f725468fe66985464fe6)) by @AliMD
* **crypto/preConfig:** update prefix and secret algorithm ([0cfff12](https://github.com/Alwatr/eslib/commit/0cfff124e692d02aad0b5c97908df63bc692f896)) by @AliMD
* **crypto/token:** review and update all methods and documents ([dc943f8](https://github.com/Alwatr/eslib/commit/dc943f8a007567b58e9e3b7f9cada556ac76ae9b)) by @AliMD
* **crypto/user:** review and update all methods and documents ([bb79fa8](https://github.com/Alwatr/eslib/commit/bb79fa81f8632d5fe75cac813238b04094d0bb6a)) by @AliMD
* **crypto:** prefix option ([6be5c90](https://github.com/Alwatr/eslib/commit/6be5c90dad4674e8ae3e27611a13dcf1e08ce11a)) by @AliMD

### BREAKING CHANGES

* **crypto/user:** methods name updated
* **crypto/token:** methods name updated
* **crypto/hash:** methods name updated

## [1.2.1](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.2.0...@alwatr/crypto@1.2.1) (2023-11-23)

**Note:** Version bump only for package @alwatr/crypto

# [1.2.0](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.12...@alwatr/crypto@1.2.0) (2023-11-14)

### Features

* **yarn:** pnp ([b6a562c](https://github.com/Alwatr/eslib/commit/b6a562c909a35b3e626442e5c325da3fce448e1b)) by @AliMD

## [1.1.12](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.11...@alwatr/crypto@1.1.12) (2023-11-08)

### Bug Fixes

* move repo urls ([719aa3e](https://github.com/Alwatr/eslib/commit/719aa3e7462d3c9c6272958fc93f89fda6793fb1)) by @AliMD

## [1.1.11](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.10...@alwatr/crypto@1.1.11) (2023-11-01)

**Note:** Version bump only for package @alwatr/crypto

## [1.1.10](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.9...@alwatr/crypto@1.1.10) (2023-10-23)

**Note:** Version bump only for package @alwatr/crypto

## [1.1.9](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.8...@alwatr/crypto@1.1.9) (2023-10-23)

**Note:** Version bump only for package @alwatr/crypto

## [1.1.8](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.7...@alwatr/crypto@1.1.8) (2023-10-23)

### Bug Fixes

* **crypto:** compatible with new logger api ([f867317](https://github.com/Alwatr/eslib/commit/f8673178d18f14276e13dcb35a7d973f301a722b)) by @AliMD

## [1.1.7](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.6...@alwatr/crypto@1.1.7) (2023-10-23)

**Note:** Version bump only for package @alwatr/crypto

## [1.1.6](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.5...@alwatr/crypto@1.1.6) (2023-10-23)

**Note:** Version bump only for package @alwatr/crypto

## [1.1.5](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.4...@alwatr/crypto@1.1.5) (2023-09-19)

### Bug Fixes

- package repo urls ([466cbe9](https://github.com/Alwatr/eslib/commit/466cbe9188f24e1a1bc36d879a95b52538a58f16)) by @AliMD

## [1.1.4](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.3...@alwatr/crypto@1.1.4) (2023-09-19)

**Note:** Version bump only for package @alwatr/crypto

## 1.1.3 (2023-09-19)

**Note:** Version bump only for package @alwatr/crypto

## [1.1.2](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.1...@alwatr/crypto@1.1.2) (2023-09-12)

**Note:** Version bump only for package @alwatr/crypto

## [1.1.1](https://github.com/Alwatr/eslib/compare/@alwatr/crypto@1.1.0...@alwatr/crypto@1.1.1) (2023-09-12)

**Note:** Version bump only for package @alwatr/crypto

# 1.1.0 (2023-09-12)

# 1.0.0 (2023-06-14)

# 0.32.0 (2023-05-27)

### Features

- **crypto:** add some pre config ([4b960c5](https://github.com/Alwatr/eslib/commit/4b960c5cb3f7495c0689adcb65c62a1032ae2650))

### Performance Improvements

- **crypto/hash:** enhance crc generator ([ba8c4bc](https://github.com/Alwatr/eslib/commit/ba8c4bcf8f9ec9767b0bd3b6c3fd5c4f503a84dd))

# 0.31.0 (2023-05-08)

### Bug Fixes

- **crypto:** package ([866c5f4](https://github.com/Alwatr/eslib/commit/866c5f490ea2eaa75bf177f35b3f4711931e13d2))

### Features

- **crypto:** make prefix for userId ([5baa00a](https://github.com/Alwatr/eslib/commit/5baa00aafb16a4c6ed1d77913edddd090f732dad))

# [1.0.0](https://github.com/Alwatr/eslib/compare/v0.32.0...v1.0.0) (2023-06-14)

**Note:** Version bump only for package @alwatr/crypto

# [0.32.0](https://github.com/Alwatr/eslib/compare/v0.31.0...v0.32.0) (2023-05-27)

### Features

- **crypto:** add some pre config ([4b960c5](https://github.com/Alwatr/eslib/commit/4b960c5cb3f7495c0689adcb65c62a1032ae2650))

### Performance Improvements

- **crypto/hash:** enhance crc generator ([ba8c4bc](https://github.com/Alwatr/eslib/commit/ba8c4bcf8f9ec9767b0bd3b6c3fd5c4f503a84dd))

# [0.31.0](https://github.com/Alwatr/eslib/compare/v0.30.0...v0.31.0) (2023-05-08)

### Bug Fixes

- **crypto:** package ([866c5f4](https://github.com/Alwatr/eslib/commit/866c5f490ea2eaa75bf177f35b3f4711931e13d2))

### Features

- **crypto:** make prefix for userId ([5baa00a](https://github.com/Alwatr/eslib/commit/5baa00aafb16a4c6ed1d77913edddd090f732dad))

# [0.30.0](https://github.com/Alwatr/eslib/compare/v0.29.0...v0.30.0) (2023-03-06)

**Note:** Version bump only for package @alwatr/crypto

# [0.29.0](https://github.com/Alwatr/eslib/compare/v0.28.0...v0.29.0) (2023-02-10)

**Note:** Version bump only for package @alwatr/crypto

# [0.28.0](https://github.com/Alwatr/eslib/compare/v0.27.0...v0.28.0) (2023-01-20)

### Bug Fixes

- **token:** types ([a7da60e](https://github.com/Alwatr/eslib/commit/a7da60e720ac83b8d2d2ed5c0b811dea1952a2b9))

### Features

- **token:** generate and verify token without expiration time ([6db78f0](https://github.com/Alwatr/eslib/commit/6db78f0644e076c3401a263173d7139838bbbf0c))
- **type:** define math types ([8c19f40](https://github.com/Alwatr/eslib/commit/8c19f4058d4361b7d3f4f714595e34cb6fa21109))

# [0.27.0](https://github.com/Alwatr/eslib/compare/v0.26.0...v0.27.0) (2022-12-29)

**Note:** Version bump only for package @alwatr/crypto

# [0.26.0](https://github.com/Alwatr/eslib/compare/v0.25.0...v0.26.0) (2022-12-22)

### Bug Fixes

- set correct path ([d01ce6f](https://github.com/Alwatr/eslib/commit/d01ce6ffa749a5e3e0e11e35b4ed61d75d61fec9))
- tsconfig ([e96dcd3](https://github.com/Alwatr/eslib/commit/e96dcd30774a9f06f7d051e0504192cbbe019e35))

# [0.25.0](https://github.com/Alwatr/eslib/compare/v0.24.1...v0.25.0) (2022-12-07)

**Note:** Version bump only for package @alwatr/crypto

## [0.24.1](https://github.com/Alwatr/eslib/compare/v0.24.0...v0.24.1) (2022-12-01)

**Note:** Version bump only for package @alwatr/crypto

# [0.24.0](https://github.com/Alwatr/eslib/compare/v0.23.0...v0.24.0) (2022-11-28)

### Bug Fixes

- use ~ for package version ([4e027ff](https://github.com/Alwatr/eslib/commit/4e027ff63875e03b088ebcdc1bdf2495f4494eec))

# [0.23.0](https://github.com/Alwatr/eslib/compare/v0.22.1...v0.23.0) (2022-11-23)

**Note:** Version bump only for package @alwatr/crypto

## [0.22.1](https://github.com/Alwatr/eslib/compare/v0.22.0...v0.22.1) (2022-11-21)

**Note:** Version bump only for package @alwatr/crypto

# [0.22.0](https://github.com/Alwatr/eslib/compare/v0.21.0...v0.22.0) (2022-11-20)

**Note:** Version bump only for package @alwatr/crypto

# [0.21.0](https://github.com/Alwatr/eslib/compare/v0.20.0...v0.21.0) (2022-11-13)

**Note:** Version bump only for package @alwatr/crypto

# [0.20.0](https://github.com/Alwatr/eslib/compare/v0.19.0...v0.20.0) (2022-11-05)

**Note:** Version bump only for package @alwatr/crypto

# [0.19.0](https://github.com/Alwatr/eslib/compare/v0.18.0...v0.19.0) (2022-11-01)

**Note:** Version bump only for package @alwatr/crypto

# [0.18.0](https://github.com/Alwatr/eslib/compare/v0.17.0...v0.18.0) (2022-10-22)

**Note:** Version bump only for package @alwatr/crypto

# [0.17.0](https://github.com/Alwatr/eslib/compare/v0.16.1...v0.17.0) (2022-10-21)

**Note:** Version bump only for package @alwatr/crypto

# [0.16.0](https://github.com/Alwatr/eslib/compare/v0.15.0...v0.16.0) (2022-09-08)

**Note:** Version bump only for package @alwatr/crypto

# [0.15.0](https://github.com/Alwatr/eslib/compare/v0.14.0...v0.15.0) (2022-09-01)

**Note:** Version bump only for package @alwatr/crypto

# [0.14.0](https://github.com/Alwatr/eslib/compare/v0.13.0...v0.14.0) (2022-08-19)

**Note:** Version bump only for package @alwatr/crypto

# [0.13.0](https://github.com/Alwatr/eslib/compare/v0.12.0...v0.13.0) (2022-08-06)

### Features

- **token:** generate and verify HOTP tpkens ([d0372f8](https://github.com/Alwatr/eslib/commit/d0372f805a45d6fd6571b50821529068cec7d424))
- **token:** new package files ([fe620e0](https://github.com/Alwatr/eslib/commit/fe620e0d9f84c4e6d8e0eed47d6b398e218429ad))
