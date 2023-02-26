// check if exists 
require.resolve('some-lib-or-file');
/**
Uncaught Error: Cannot find module 'some-lib-or-file'
Require stack:
- <m1>
    at Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
    at Function.resolve (node:internal/modules/cjs/helpers:109:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '<m1>' ]
}
 */
