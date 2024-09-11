# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.0-alpha.1](https://github.com/Alwatr/nanotron/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2024-09-11)

### ⚠ BREAKING CHANGES

* **api-server:** separate NanotronClientRequest and NanotronServerResponse classes

Co-authored-by: Mohammad Honarvar <honarvar.info@gmail.com>
Co-authored-by: James Sumners <321201+jsumners@users.noreply.github.com>
Co-authored-by: Frazer Smith <frazer.dev@icloud.com>
Co-authored-by: Simone Busoli <simone.busoli@gmail.com>
Co-authored-by: Carlos Fuentes <me@metcoder.dev>
Co-authored-by: KaKa <23028015+climba03003@users.noreply.github.com>

### Features

* **api-server:** add `preHandlers_` property ([80a301e](https://github.com/Alwatr/nanotron/commit/80a301e2ef7fb54e681ca7085582ad48bd47e4e2)) by @AliMD
* **api-server:** Add preHandlers_ and postHandlers_ properties in DefineRouteOption ([d4f3e8c](https://github.com/Alwatr/nanotron/commit/d4f3e8c20bc94ad16585e64afa4012a5a649e5a4)) by @AliMD
* **api-server:** prevent to run the handlers when `terminatedHandlers` equals `true` ([185bc11](https://github.com/Alwatr/nanotron/commit/185bc114dbdef952823b5b2be72c87bb01f6780e)) by @AliMD
* **api-server:** Refactor `replyError` method and add `terminatedHandlers` property ([c6f9c69](https://github.com/Alwatr/nanotron/commit/c6f9c69bdbb3b996b5b0b602476a6f88ecfcbfd5)) by @AliMD
* **api-server:** Update replyError method and add errorHappened property in api-connection.ts ([166c950](https://github.com/Alwatr/nanotron/commit/166c950fcced582bb2aa5fbc55d29798e8e09b91)) by @AliMD
* **api-server:** Update replyError method in api-connection.ts ([968b024](https://github.com/Alwatr/nanotron/commit/968b02441610f906032b822ac655ac43a9768fdf)) by @AliMD

### Bug Fixes

* **api-server:** update exports ([8ed905b](https://github.com/Alwatr/nanotron/commit/8ed905b1f85394a4ce1c42c8bde88d13616d687f)) by @AliMD

### Code Refactoring

* **api-server:** separate NanotronClientRequest and NanotronServerResponse classes ([c207488](https://github.com/Alwatr/nanotron/commit/c2074888809e6b7ea6fc7ffe1d0dec7e0d60de2a)) by @AliMD
* **api-server:** Separate NanotronClientRequest and NanotronServerResponse classes ([c02d51b](https://github.com/Alwatr/nanotron/commit/c02d51bd7427493aacdc630a7d08c5bda4f54e59)) by @AliMD
* **api-server:** Update logger name in NanotronApiServer ([6f0a959](https://github.com/Alwatr/nanotron/commit/6f0a959bfd2bf6d5f60fc518c6a916cd255a9bd0)) by @
* NanotronApiServer to separate NanotronClientRequest and NanotronServerResponse classes ([3116fdf](https://github.com/Alwatr/nanotron/commit/3116fdf6dc93af93a1e3ff47755f431e12efa228)) by @AliMD

## [4.0.0-alpha.0](https://github.com/Alwatr/nanotron/compare/v1.2.7...v4.0.0-alpha.0) (2024-09-10)

### ⚠ BREAKING CHANGES

* everything rewrite from scratch please check the documents

Co-authored-by: Mohammad Honarvar <honarvar.info@gmail.com>

### Features

* Add applyReplyHeaders_ method to NanotronApiConnection class ([2a0eb4a](https://github.com/Alwatr/nanotron/commit/2a0eb4a1cb02519ad4aea6ad5d4d45de058029c2)) by @AliMD
* Add close method to NanotronApiServer ([cbd2ed8](https://github.com/Alwatr/nanotron/commit/cbd2ed8bc43fc78027ec8a647659a8ab59e7606c)) by @AliMD
* Add constructor to NanotronApiConnection class ([71d7a3a](https://github.com/Alwatr/nanotron/commit/71d7a3a51009a53fa7a23e39a3780bbc755038fd)) by @AliMD
* Add constructor to NanotronApiServer ([fbb358c](https://github.com/Alwatr/nanotron/commit/fbb358c1f2867f3bece25e7cb3cc4b18760e4204)) by @AliMD
* Add constructor, default configuration, DefineRouteOption interface, and NanotronApiServerConfig interface to NanotronApiServer ([3af3d82](https://github.com/Alwatr/nanotron/commit/3af3d82db4fc7c8d18767d11254aff52691fe8db)) by @AliMD
* Add default configuration for NanotronApiServer ([19495d0](https://github.com/Alwatr/nanotron/commit/19495d07c0dfb6d5c400ebbbf5beac8aa9236452)) by @AliMD
* Add defineRoute method to NanotronApiServer ([e1448c9](https://github.com/Alwatr/nanotron/commit/e1448c991c8beae0b8f53a283b2439cc0a826603)) by @AliMD
* Add DefineRouteOption interface ([f481ecb](https://github.com/Alwatr/nanotron/commit/f481ecb0e71c2d6d04184394f2403fd4ad376113)) by @AliMD
* Add error handling and request handling to NanotronApiServer ([2fcc6f9](https://github.com/Alwatr/nanotron/commit/2fcc6f943e9f08cd3f83c8d19691b79dbb877ca0)) by @AliMD
* Add error handling for client errors in NanotronApiServer ([f7667d8](https://github.com/Alwatr/nanotron/commit/f7667d82cb7778943e83e041820d95868866de1b)) by @AliMD
* Add error handling for HTTP errors in NanotronApiServer ([2a8a87c](https://github.com/Alwatr/nanotron/commit/2a8a87cb0d1aa5d359daab49f3456b34c8ae7984)) by @AliMD
* Add error handling to handleServerError_ method in NanotronApiServer ([4273478](https://github.com/Alwatr/nanotron/commit/42734788c59dbcac264ea5b75d2a547cac2a33e1)) by @AliMD
* Add getRouteOption_ method to NanotronApiServer ([4eada32](https://github.com/Alwatr/nanotron/commit/4eada3237cbed77709389bf823d8ed8f5c9259d0)) by @AliMD
* Add HttpResponseHeaders interface and ErrorResponse type to type.ts ([03fe655](https://github.com/Alwatr/nanotron/commit/03fe655e5f9c8d965948b20ca0d2f5817f78e0f4)) by @AliMD
* Add HttpResponseHeaders interface to type.ts ([fe971fd](https://github.com/Alwatr/nanotron/commit/fe971fd13a61aee1ee49d3ac2039ca8c5d3cd2d7)) by @AliMD
* Add HttpStatusCode type to const.ts ([44888c3](https://github.com/Alwatr/nanotron/commit/44888c386fe4d943f2bf78b5ec0ad2f80a4269e8)) by @AliMD
* Add HttpStatusCodes object to const.ts ([76436bc](https://github.com/Alwatr/nanotron/commit/76436bcda5a64c249b232cae433eb5c93f32d9e4)) by @AliMD
* Add HttpStatusMessages object to const.ts ([4424261](https://github.com/Alwatr/nanotron/commit/442426170c1cc667a8ac834f4b6d87c28da602ad)) by @AliMD
* Add MatchType type to type.ts ([21fe834](https://github.com/Alwatr/nanotron/commit/21fe83479483e70ac4f52ca83a479732836dcd4e)) by @AliMD
* Add NanotronApiConnection class and import dependencies ([ee952a5](https://github.com/Alwatr/nanotron/commit/ee952a5024b40e8f361c791a60e06714f355a4c6)) by @AliMD
* Add NanotronApiConnectionConfig interface ([995fad1](https://github.com/Alwatr/nanotron/commit/995fad15f92909ee62fb4032e5ad797ac5a45b9f)) by @AliMD
* Add NanotronApiServerConfig interface ([fe94be3](https://github.com/Alwatr/nanotron/commit/fe94be388d7f97b84ee0878595731e6f85886e6e)) by @AliMD
* Add reply method to NanotronApiConnection class ([494173c](https://github.com/Alwatr/nanotron/commit/494173c270c645b244a6611947c3f6e7280b4444)) by @AliMD
* Add replyError method to NanotronApiConnection class ([1489c34](https://github.com/Alwatr/nanotron/commit/1489c3485253db3805ac59ede2ad332191fe45f6)) by @AliMD
* Add replyHeaders property to NanotronApiConnection ([166f308](https://github.com/Alwatr/nanotron/commit/166f3086d94901a37ae2c5326727aaab3c6236bc)) by @AliMD
* Add replyJson method to NanotronApiConnection class ([028e6ef](https://github.com/Alwatr/nanotron/commit/028e6eff04e346fd33e9ebeb65c639a8841dabfa)) by @AliMD
* Add replyJsonError method to NanotronApiConnection class ([5cbb0a7](https://github.com/Alwatr/nanotron/commit/5cbb0a7e444a46d4aec1da469d4b5fe22a81bf97)) by @AliMD
* Add replySent property to NanotronApiConnection class ([ad955c3](https://github.com/Alwatr/nanotron/commit/ad955c397463dad707b56506eeaaecd3fc350f31)) by @AliMD
* Add replyStatusCode property to NanotronApiConnection class ([e92d71c](https://github.com/Alwatr/nanotron/commit/e92d71c71d6485bca56784ae43211f11cbf4cdbf)) by @AliMD
* Add RouteHandler type to type.ts ([0050dc3](https://github.com/Alwatr/nanotron/commit/0050dc3bee94c0d8fc663581f7c801c4782b34ce)) by @AliMD
* Add setRouteOption_ method to NanotronApiServer ([755cb93](https://github.com/Alwatr/nanotron/commit/755cb934d0ddff81e33436c0f787285e7dd378c8)) by @AliMD
* Add standard HTTP methods to const.ts ([eb9cf06](https://github.com/Alwatr/nanotron/commit/eb9cf061e557eac88c5b3fcab4f82ea3fb82ee5b)) by @AliMD
* Add version pattern and logger to NanotronApiConnection ([798af10](https://github.com/Alwatr/nanotron/commit/798af1064cb5a81b819a19b68efbf0aea92d8994)) by @AliMD
* HttpMethod type ([520ac4f](https://github.com/Alwatr/nanotron/commit/520ac4f8965d67023fafdf8dfcc3fde901462fc0)) by @AliMD

### Code Refactoring

* cleanup old nano-server ([0656967](https://github.com/Alwatr/nanotron/commit/06569674be239cca025e7f48810324aed6c03ede)) by @AliMD
* Import necessary modules and types in api-server.ts ([bd4253f](https://github.com/Alwatr/nanotron/commit/bd4253f4d5f1e7237cbf3a1e4d07e44e628ba2d8)) by @AliMD
* Remove unused 'client-id' header from IncomingHttpHeaders ([43617d8](https://github.com/Alwatr/nanotron/commit/43617d86189055c41a6f326e101a3dff834c8d28)) by @AliMD
* Update package description in api-server ([df4df3f](https://github.com/Alwatr/nanotron/commit/df4df3f9e71dcdca4f9f0b53199bf15fcb41fa5a)) by @AliMD

### Miscellaneous Chores

* rename http-server to nanotron-api-server ([7dd983e](https://github.com/Alwatr/nanotron/commit/7dd983e41e174349549fcdcf02ee202e74aa4453)) by @AliMD

### Dependencies update

* update ([f95134f](https://github.com/Alwatr/nanotron/commit/f95134fe5a4b61ee01eb84450807efb9ef099010)) by @AliMD

## [1.2.7](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/nano-server@1.2.6...@alwatr/nano-server@1.2.7) (2023-12-19)

**Note:** Version bump only for package @alwatr/nano-server

## [1.2.6](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/nano-server@1.2.5...@alwatr/nano-server@1.2.6) (2023-12-19)

**Note:** Version bump only for package @alwatr/nano-server

## [1.2.5](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/nano-server@1.2.4...@alwatr/nano-server@1.2.5) (2023-12-11)

**Note:** Version bump only for package @alwatr/nano-server

## [1.2.4](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/nano-server@1.2.3...@alwatr/nano-server@1.2.4) (2023-12-11)

**Note:** Version bump only for package @alwatr/nano-server

## [1.2.3](https://github.com/Alwatr/alwatr-es-sdk/compare/@alwatr/nano-server@1.2.2...@alwatr/nano-server@1.2.3) (2023-12-09)

**Note:** Version bump only for package @alwatr/nano-server

## [1.2.2](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.2.1...@alwatr/nano-server@1.2.2) (2023-11-29)

**Note:** Version bump only for package @alwatr/nano-server

## [1.2.1](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.2.0...@alwatr/nano-server@1.2.1) (2023-11-23)

**Note:** Version bump only for package @alwatr/nano-server

# [1.2.0](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.12...@alwatr/nano-server@1.2.0) (2023-11-14)

### Features

* **yarn:** pnp ([b6a562c](https://github.com/Alwatr/eslib/commit/b6a562c909a35b3e626442e5c325da3fce448e1b)) by @AliMD

## [1.1.12](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.11...@alwatr/nano-server@1.1.12) (2023-11-08)

### Bug Fixes

* move repo urls ([719aa3e](https://github.com/Alwatr/eslib/commit/719aa3e7462d3c9c6272958fc93f89fda6793fb1)) by @AliMD

## [1.1.11](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.10...@alwatr/nano-server@1.1.11) (2023-11-01)

**Note:** Version bump only for package @alwatr/nano-server

## [1.1.10](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.9...@alwatr/nano-server@1.1.10) (2023-10-23)

**Note:** Version bump only for package @alwatr/nano-server

## [1.1.9](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.8...@alwatr/nano-server@1.1.9) (2023-10-23)

**Note:** Version bump only for package @alwatr/nano-server

## [1.1.8](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.7...@alwatr/nano-server@1.1.8) (2023-10-23)

### Bug Fixes

* **nano-server:** compatible with new logger api ([ecace8b](https://github.com/Alwatr/eslib/commit/ecace8bd5b0007e605c7e4eeebc1c1806d8f84d6)) by @AliMD

## [1.1.7](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.6...@alwatr/nano-server@1.1.7) (2023-10-23)

**Note:** Version bump only for package @alwatr/nano-server

## [1.1.6](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.5...@alwatr/nano-server@1.1.6) (2023-10-23)

**Note:** Version bump only for package @alwatr/nano-server

## [1.1.5](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.4...@alwatr/nano-server@1.1.5) (2023-09-19)

### Bug Fixes

- package repo urls ([466cbe9](https://github.com/Alwatr/eslib/commit/466cbe9188f24e1a1bc36d879a95b52538a58f16)) by @AliMD

## [1.1.4](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.3...@alwatr/nano-server@1.1.4) (2023-09-19)

**Note:** Version bump only for package @alwatr/nano-server

## 1.1.3 (2023-09-19)

**Note:** Version bump only for package @alwatr/nano-server

## [1.1.2](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.1...@alwatr/nano-server@1.1.2) (2023-09-12)

**Note:** Version bump only for package @alwatr/nano-server

## [1.1.1](https://github.com/Alwatr/eslib/compare/@alwatr/nano-server@1.1.0...@alwatr/nano-server@1.1.1) (2023-09-12)

**Note:** Version bump only for package @alwatr/nano-server

# 1.1.0 (2023-09-12)

# 1.0.0 (2023-06-14)

# 0.32.0 (2023-05-27)

### Bug Fixes

- **nano-server:** `data` type ([f629f3b](https://github.com/Alwatr/eslib/commit/f629f3b7952b775ead78119c699ce93c119b8164))

# 0.31.0 (2023-05-08)

### Bug Fixes

- **nano-server:** path prefix ([83995f7](https://github.com/Alwatr/eslib/commit/83995f7bc9748ecb632d6f8dbea5e2f96fa59c41))
- **nano-server:** prefixPattern, logger ([f9d203e](https://github.com/Alwatr/eslib/commit/f9d203e65955629f6dd5c468867f20ce578337eb))
- new logger api ([9d83a7d](https://github.com/Alwatr/eslib/commit/9d83a7dc5c103bc3bb4282dacfd85fa998915300))

### Features

- **nano-server:** add getUserAuth ([615266f](https://github.com/Alwatr/eslib/commit/615266f06ef47a7a5b36fe3d6abee1653703bf6f))
- **nano-server:** prefix pattern ([ad5e1b5](https://github.com/Alwatr/eslib/commit/ad5e1b56651c96cb825187604f877fee396b3ec4))

# 0.30.0 (2023-03-06)

### Features

- **nano-server:** getRemoteAddress ([eff82cb](https://github.com/Alwatr/eslib/commit/eff82cbdba5a35a88d95f6997365210683163d62))
- **nano-server:** requireClientId ([fccd734](https://github.com/Alwatr/eslib/commit/fccd734f0c08cc624492b30e14c451143706cc00))

# 0.29.0 (2023-02-10)

### Bug Fixes

- **nano-server:** compatible with ParamValueType ([325d896](https://github.com/Alwatr/eslib/commit/325d89651aeba38079d6fb9184adb894df94f083))
- **nano-server:** null parsedParams ([bb969b2](https://github.com/Alwatr/eslib/commit/bb969b23495f791003225b5c557e40e10e7f8124))
- **nano-server:** type ([2586061](https://github.com/Alwatr/eslib/commit/25860611f765e67ecddd586d80169ebe7f75701b))

### Features

- **nano-server:** add client-id to IncomingHttpHeaders type ([a4a86c7](https://github.com/Alwatr/eslib/commit/a4a86c7e410edfe69e66cdab6b8ffdc0d9b95eb8))
- **nano-service:** api prefix support ([21960dc](https://github.com/Alwatr/eslib/commit/21960dce5f25a587b19886e487f7d46af5ca087b))

# 0.28.0 (2023-01-20)

### Bug Fixes

- **nano-server:** math references ([e46071a](https://github.com/Alwatr/eslib/commit/e46071a49bb61cb6f36d2e79e14c32712f3746fa))
- **type:** revert paramkey ([f1ad066](https://github.com/Alwatr/eslib/commit/f1ad06621f7fe80018573e50804e9f3c1b2edde1))

# 0.27.0 (2022-12-29)

### Bug Fixes

- review issue ([e5d192c](https://github.com/Alwatr/eslib/commit/e5d192cbee6917c2de01146cf8bd026895724ab8))

# 0.26.0 (2022-12-22)

### Bug Fixes

- inline home route ([ce978f6](https://github.com/Alwatr/eslib/commit/ce978f6e1e2890e853d0db351c08efca665e5fad))
- **nano-server:** check method on getBody ([9aa9857](https://github.com/Alwatr/eslib/commit/9aa9857fb6ad96f861f31c651bf131813e46b343))
- **nano-server:** handle utf8 reply issue ([33aa238](https://github.com/Alwatr/eslib/commit/33aa238d99f92c03a5b39e829cb39172dc45d5c6))
- **nano-server:** remove return null on requireToken ([3c6779f](https://github.com/Alwatr/eslib/commit/3c6779f6b114aa1afe71e9b2054fb6dbe273c26a))
- **nano-server:** route generic ([94e181b](https://github.com/Alwatr/eslib/commit/94e181ba1172399ac992af6dc969c56e4edffbf0))
- **nano-server:** update docs and return type ([df949c1](https://github.com/Alwatr/eslib/commit/df949c19ea75921ab9c3e7323dc33ef340bd3ee7))
- set correct path ([d01ce6f](https://github.com/Alwatr/eslib/commit/d01ce6ffa749a5e3e0e11e35b4ed61d75d61fec9))
- tsconfig ([e96dcd3](https://github.com/Alwatr/eslib/commit/e96dcd30774a9f06f7d051e0504192cbbe019e35))

### Features

- improve accident debugging ([d697e6c](https://github.com/Alwatr/eslib/commit/d697e6c4c7d0a4172f4dba9caf6fbd478f79de9c))
- improve error debugging ([1fba504](https://github.com/Alwatr/eslib/commit/1fba50400a1e8ececc10bbe8ea11cc8dcea2289c))
- **nano-server:** clear debug info from client for security reasons. ([5814af2](https://github.com/Alwatr/eslib/commit/5814af2ceeac6e2175c4ab924e4b40cef765072c))
- **nano-server:** maybe promise type ([d782761](https://github.com/Alwatr/eslib/commit/d7827616ea71b7e6328c6a85b80c2daec0b6f512))
- **nano-server:** reply throw on route ([083dfa5](https://github.com/Alwatr/eslib/commit/083dfa51b391dc689d1d4fed9f1f17d768e7384c))
- **nano-server:** routeMiddleware type ([a05b1a2](https://github.com/Alwatr/eslib/commit/a05b1a2bc79aeca67a81f4758f5d2b0f6c890028))

# [1.0.0](https://github.com/Alwatr/eslib/compare/v0.32.0...v1.0.0) (2023-06-14)

**Note:** Version bump only for package @alwatr/nano-server

# [0.32.0](https://github.com/Alwatr/eslib/compare/v0.31.0...v0.32.0) (2023-05-27)

### Bug Fixes

- **nano-server:** `data` type ([f629f3b](https://github.com/Alwatr/eslib/commit/f629f3b7952b775ead78119c699ce93c119b8164))

# [0.31.0](https://github.com/Alwatr/eslib/compare/v0.30.0...v0.31.0) (2023-05-08)

### Bug Fixes

- **nano-server:** path prefix ([83995f7](https://github.com/Alwatr/eslib/commit/83995f7bc9748ecb632d6f8dbea5e2f96fa59c41))
- **nano-server:** prefixPattern, logger ([f9d203e](https://github.com/Alwatr/eslib/commit/f9d203e65955629f6dd5c468867f20ce578337eb))
- new logger api ([9d83a7d](https://github.com/Alwatr/eslib/commit/9d83a7dc5c103bc3bb4282dacfd85fa998915300))

### Features

- **nano-server:** add getUserAuth ([615266f](https://github.com/Alwatr/eslib/commit/615266f06ef47a7a5b36fe3d6abee1653703bf6f))
- **nano-server:** prefix pattern ([ad5e1b5](https://github.com/Alwatr/eslib/commit/ad5e1b56651c96cb825187604f877fee396b3ec4))

# [0.30.0](https://github.com/Alwatr/eslib/compare/v0.29.0...v0.30.0) (2023-03-06)

### Features

- **nano-server:** getRemoteAddress ([eff82cb](https://github.com/Alwatr/eslib/commit/eff82cbdba5a35a88d95f6997365210683163d62))
- **nano-server:** requireClientId ([fccd734](https://github.com/Alwatr/eslib/commit/fccd734f0c08cc624492b30e14c451143706cc00))

# [0.29.0](https://github.com/Alwatr/eslib/compare/v0.28.0...v0.29.0) (2023-02-10)

### Bug Fixes

- **nano-server:** compatible with ParamValueType ([325d896](https://github.com/Alwatr/eslib/commit/325d89651aeba38079d6fb9184adb894df94f083))
- **nano-server:** null parsedParams ([bb969b2](https://github.com/Alwatr/eslib/commit/bb969b23495f791003225b5c557e40e10e7f8124))
- **nano-server:** type ([2586061](https://github.com/Alwatr/eslib/commit/25860611f765e67ecddd586d80169ebe7f75701b))

### Features

- **nano-server:** add client-id to IncomingHttpHeaders type ([a4a86c7](https://github.com/Alwatr/eslib/commit/a4a86c7e410edfe69e66cdab6b8ffdc0d9b95eb8))
- **nano-service:** api prefix support ([21960dc](https://github.com/Alwatr/eslib/commit/21960dce5f25a587b19886e487f7d46af5ca087b))

# [0.28.0](https://github.com/Alwatr/eslib/compare/v0.27.0...v0.28.0) (2023-01-20)

### Bug Fixes

- **nano-server:** math references ([e46071a](https://github.com/Alwatr/eslib/commit/e46071a49bb61cb6f36d2e79e14c32712f3746fa))
- review issue ([e5d192c](https://github.com/Alwatr/eslib/commit/e5d192cbee6917c2de01146cf8bd026895724ab8))
- **type:** revert paramkey ([f1ad066](https://github.com/Alwatr/eslib/commit/f1ad06621f7fe80018573e50804e9f3c1b2edde1))

# [0.27.0](https://github.com/Alwatr/eslib/compare/v0.26.0...v0.27.0) (2022-12-29)

**Note:** Version bump only for package @alwatr/nano-server

# [0.26.0](https://github.com/Alwatr/eslib/compare/v0.25.0...v0.26.0) (2022-12-22)

### Bug Fixes

- inline home route ([ce978f6](https://github.com/Alwatr/eslib/commit/ce978f6e1e2890e853d0db351c08efca665e5fad))
- **nano-server:** check method on getBody ([9aa9857](https://github.com/Alwatr/eslib/commit/9aa9857fb6ad96f861f31c651bf131813e46b343))
- **nano-server:** handle utf8 reply issue ([33aa238](https://github.com/Alwatr/eslib/commit/33aa238d99f92c03a5b39e829cb39172dc45d5c6))
- **nano-server:** remove return null on requireToken ([3c6779f](https://github.com/Alwatr/eslib/commit/3c6779f6b114aa1afe71e9b2054fb6dbe273c26a))
- **nano-server:** route generic ([94e181b](https://github.com/Alwatr/eslib/commit/94e181ba1172399ac992af6dc969c56e4edffbf0))
- **nano-server:** update docs and return type ([df949c1](https://github.com/Alwatr/eslib/commit/df949c19ea75921ab9c3e7323dc33ef340bd3ee7))
- set correct path ([d01ce6f](https://github.com/Alwatr/eslib/commit/d01ce6ffa749a5e3e0e11e35b4ed61d75d61fec9))
- tsconfig ([e96dcd3](https://github.com/Alwatr/eslib/commit/e96dcd30774a9f06f7d051e0504192cbbe019e35))

### Features

- improve accident debugging ([d697e6c](https://github.com/Alwatr/eslib/commit/d697e6c4c7d0a4172f4dba9caf6fbd478f79de9c))
- improve error debugging ([1fba504](https://github.com/Alwatr/eslib/commit/1fba50400a1e8ececc10bbe8ea11cc8dcea2289c))
- **nano-server:** clear debug info from client for security reasons. ([5814af2](https://github.com/Alwatr/eslib/commit/5814af2ceeac6e2175c4ab924e4b40cef765072c))
- **nano-server:** maybe promise type ([d782761](https://github.com/Alwatr/eslib/commit/d7827616ea71b7e6328c6a85b80c2daec0b6f512))
- **nano-server:** reply throw on route ([083dfa5](https://github.com/Alwatr/eslib/commit/083dfa51b391dc689d1d4fed9f1f17d768e7384c))
- **nano-server:** routeMiddleware type ([a05b1a2](https://github.com/Alwatr/eslib/commit/a05b1a2bc79aeca67a81f4758f5d2b0f6c890028))

# [0.25.0](https://github.com/Alwatr/eslib/compare/v0.24.1...v0.25.0) (2022-12-07)

**Note:** Version bump only for package @alwatr/nano-server

## [0.24.1](https://github.com/Alwatr/eslib/compare/v0.24.0...v0.24.1) (2022-12-01)

**Note:** Version bump only for package @alwatr/nano-server

# [0.24.0](https://github.com/Alwatr/eslib/compare/v0.23.0...v0.24.0) (2022-11-28)

### Bug Fixes

- **demo:** update types ([010b123](https://github.com/Alwatr/eslib/commit/010b123075d073c8583f557608a9781064d7cc5c))
- **nano-server:** \_sanitizeParam types ([bd4f39d](https://github.com/Alwatr/eslib/commit/bd4f39d32ceef5f2be26fce27a37cc7e1d5f6bd6))
- **nano-server:** deps ([ea0ceba](https://github.com/Alwatr/eslib/commit/ea0ceba7da3d1bc0542d9eb69d951aa3c3165175))
- **nano-server:** handle preflight request ([ab575cd](https://github.com/Alwatr/eslib/commit/ab575cd67b3f06dc64c895a7080e766b02ee3c22))
- **nano-server:** use config for cors ([947dad9](https://github.com/Alwatr/eslib/commit/947dad9473d7408aad9a4640ffdd2157edae10c5))
- use ~ for package version ([4e027ff](https://github.com/Alwatr/eslib/commit/4e027ff63875e03b088ebcdc1bdf2495f4494eec))

# [0.23.0](https://github.com/Alwatr/eslib/compare/v0.22.1...v0.23.0) (2022-11-23)

### Bug Fixes

- **nano-server:** getToken ([a2f1ccb](https://github.com/Alwatr/eslib/commit/a2f1ccbe5d81d3f284ba1ce80dd2e54ec2245848))

## [0.22.1](https://github.com/Alwatr/eslib/compare/v0.22.0...v0.22.1) (2022-11-21)

### Bug Fixes

- add rest client extension to recommendation ([33a4a25](https://github.com/Alwatr/eslib/commit/33a4a2579208d6026380bbe8eaa9d4f9d2a8a1b9))

# [0.22.0](https://github.com/Alwatr/eslib/compare/v0.21.0...v0.22.0) (2022-11-20)

### Bug Fixes

- **nano-server:** method all ([b20afa1](https://github.com/Alwatr/eslib/commit/b20afa1fb8eeb13c4b6e3d811ae6fbbeb7465306))
- **nano-server:** no-non-null-assertion ([ad5588c](https://github.com/Alwatr/eslib/commit/ad5588c6e0e863aa03cca44c23144dbf371795da))
- **nano-server:** parse body on PATCH method ([cba790f](https://github.com/Alwatr/eslib/commit/cba790f43dc88c00ee99f5f7d7c872e8f6d1618d))
- **nano-server:** remove ALL from Methods type ([1f67c07](https://github.com/Alwatr/eslib/commit/1f67c07a5044c6d7cf89605e269af468aa49094c))
- **nano-server:** review require... methods and fix issues ([a7e4bae](https://github.com/Alwatr/eslib/commit/a7e4bae89440c2fc72a0a9e6060aac894b18eddf))
- **services/storage:** remove home route ([5b4160d](https://github.com/Alwatr/eslib/commit/5b4160df0237085e43a103a02b9b63404eddda2c))

### Features

- **nano-server:** add \_sanitizeParam ([46edbc3](https://github.com/Alwatr/eslib/commit/46edbc33eb164f6676d8a5c939d52accededfd45))
- **nano-server:** keep alive performance and options ([5ed78b6](https://github.com/Alwatr/eslib/commit/5ed78b6cf5b7fd1b00c28df26ca250d4025dc676))
- **nano-server:** parse and validate query params in AlwatrConnection ([1eadd68](https://github.com/Alwatr/eslib/commit/1eadd68d3e1f92e47d743b7412ae247f3414738f))
- **nano-server:** validate content type header in requireJsonBody ([d99eb74](https://github.com/Alwatr/eslib/commit/d99eb742c0c5ea1b92f44767d570bd42b9c9e342))
- **services/storage:** add remove route ([d4452cd](https://github.com/Alwatr/eslib/commit/d4452cd0366452ab07d82b338dbba345c32cd61d))
- **services/storage:** add requireToken to AlwatrConnection ([8073773](https://github.com/Alwatr/eslib/commit/8073773577b88a52baa90c6042bac52260ec3dc1))

### Performance Improvements

- **nano-server:** faster log ([8ff716e](https://github.com/Alwatr/eslib/commit/8ff716e1eaee59047f816e1645aa9dde7635b571))

# [0.21.0](https://github.com/Alwatr/eslib/compare/v0.20.0...v0.21.0) (2022-11-13)

**Note:** Version bump only for package @alwatr/nano-server

# [0.20.0](https://github.com/Alwatr/eslib/compare/v0.19.0...v0.20.0) (2022-11-05)

**Note:** Version bump only for package @alwatr/nano-server

# [0.19.0](https://github.com/Alwatr/eslib/compare/v0.18.0...v0.19.0) (2022-11-01)

**Note:** Version bump only for package @alwatr/nano-server

# [0.18.0](https://github.com/Alwatr/eslib/compare/v0.17.0...v0.18.0) (2022-10-22)

**Note:** Version bump only for package @alwatr/nano-server

# [0.17.0](https://github.com/Alwatr/eslib/compare/v0.16.1...v0.17.0) (2022-10-21)

**Note:** Version bump only for package @alwatr/nano-server

# [0.16.0](https://github.com/Alwatr/eslib/compare/v0.15.0...v0.16.0) (2022-09-08)

**Note:** Version bump only for package @alwatr/nano-server

# [0.15.0](https://github.com/Alwatr/eslib/compare/v0.14.0...v0.15.0) (2022-09-01)

**Note:** Version bump only for package @alwatr/nano-server

# [0.14.0](https://github.com/Alwatr/eslib/compare/v0.13.0...v0.14.0) (2022-08-19)

**Note:** Version bump only for package @alwatr/nano-server

# [0.13.0](https://github.com/Alwatr/eslib/compare/v0.12.0...v0.13.0) (2022-08-06)

### Bug Fixes

- **nano-server:** `incomingMessage` body ([0172390](https://github.com/Alwatr/eslib/commit/01723906f657c35a7a2a329b914308c3d9f06ff8))
- **nano-server:** host log ([c0c0f97](https://github.com/Alwatr/eslib/commit/c0c0f971d0405f5731cf040962b4609c9472a2fc))
- **nano-server:** logs ([72cb160](https://github.com/Alwatr/eslib/commit/72cb160b53e7bb04be6b5d24aa04f98d6a597e11))

### Features

- **nano-server:** add token to connection ([8677999](https://github.com/Alwatr/eslib/commit/867799920c917dbafe3a041a8946f7e77577552f))
- **nano-server:** refactor, add seperate config, cache all routes ([2cdd203](https://github.com/Alwatr/eslib/commit/2cdd2030474b7c1796e311740f20b8f39631bae9))

# [0.12.0](https://github.com/Alwatr/eslib/compare/v0.11.0...v0.12.0) (2022-07-22)

### Bug Fixes

- **nano-server:** logger scope ([73dbf02](https://github.com/Alwatr/eslib/commit/73dbf029325169d900558e2361fec9fa4303e7e4))

### Features

- **nano-server:** make `statusCode` in `ReplySuccessContent` optional ([fe836f4](https://github.com/Alwatr/eslib/commit/fe836f452566c541d25857df34c952b413690d23))
- **nano-server:** make new package ([2148dfc](https://github.com/Alwatr/eslib/commit/2148dfc910565f917d3cb8eb001cde08f2fc694d))
