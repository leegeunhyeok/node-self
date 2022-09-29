# node-self
🤙 self property in Node.js

[![npm version](https://img.shields.io/npm/v/node-self.svg?maxAge=2592000)](https://badge.fury.io/js/node-self)
[![npm downloads](https://img.shields.io/npm/dt/node-self.svg)](https://badge.fury.io/js/node-self)

## Table of contents

- [Features](#features)
- [Compatibility](#compatibility)
- [How to use?](#how-to-use)
- [How it works?](#how-it-works)
- [Changelog](#changelog)
- [License](#license)

## What is this?

You can use `self` property in Node.js via this module.

```javascript
// In Browser (Window context)
console.log(self) // Window { ... }

// In Browser (Dedicate worker context)
console.log(self) // DedicatedWorkerGlobalScope { ... }

// But, in Node.js
console.log(self) // ReferenceError: self is not defined
```

> Why?: `self` property is not implemented in Node.js.

## Features

You can use `self` property in Node.js.

- Super light weight
- Pure Javascript
- Zero dependency
- Safe
- No Bundler/Transpiler/Other things
- No more bugs

### Compatibility

Both Browser and Node.js.

## How to use?

Just use `self`. It's returns appropriate `Global Object` (Context Dependent)

Import [index.js](./index.js)
```javascript
// CommonJS
require('node-self')

// ES6+
import 'node-self'
```

or paste this code on the top
```javascript
void !function () {
  typeof self == 'undefined' && typeof global == 'object'
    ? global.self = global : null
}()
```

There are can be `self` (Global Object)

- Browser
  - Window
  - WorkerGlobalScope
    - DedicatedWorkerGlobalScope
    - SharedWorkerGlobalScope
    - ServiceWorkerGlobalScope
- Node.js
  - global



```javascript
self

// Browser
self === window // true

// Node.js
self === global // true
```

## How it works?

This project using `typeof` operator trickly.

`typeof` operator always return a string.
Even with undeclared identifiers, it will return `'undefined'` instead of throwing an error.

```js
undeclared; // ReferenceError: undeclared is not defined

typeof undeclared // 'undefined'
```

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#interaction_with_undeclared_and_uninitialized_variables)
- [ECMA-262 Spec](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator)

## Changelog

- 2022.09.29 (v1.0.1)
  - Change to loose equality comparison because, typeof operator is always return string value.
  - Now following [Semantic Versioning](https://semver.org)
- 2021.11.02 (v1.0.0-d)
  - Fix module import issue in typescript [#1](https://github.com/leegeunhyeok/node-self/pulls) ([@yskszk63](https://github.com/yskszk63))
- 2020.05.16: Update code (v1.0.0-c)
- 2020.05.14: Fix condition, Update document (v1.0.0-b)
- 2020.05.13: Fix condition (v1.0.0-a)
- 2020.05.13: First Release (v1.0.0)

## License

[MIT](./LICENSE)
