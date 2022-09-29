# node-self
🤙 self property in Node.js

[![npm version](https://img.shields.io/npm/v/node-self.svg?maxAge=2592000)](https://badge.fury.io/js/node-self)
[![npm downloads](https://img.shields.io/npm/dt/node-self.svg)](https://badge.fury.io/js/node-self)

## Table of contents

- [Features](#features)
- [Compatibility](#compatibility)
- [How to use?](#how-to-use)
- [How it works?](#how-it-works)
- [License](#license)

## What is this?

You can use `self` property in Node.js via this module.

```javascript
// In Browser (Window context)
console.log(self); // Window { ... }

// In Browser (Dedicate worker context)
console.log(self); // DedicatedWorkerGlobalScope { ... }

// But, in Node.js
console.log(self); // ReferenceError: self is not defined
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
require('node-self');

// ES6+
import 'node-self';
```

or paste this code on the top
```javascript
void !function () {
  typeof self == 'undefined' && typeof global == 'object'
    ? global.self = global : null
}();
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
self;

// Browser
self === window; // true

// Node.js
self === global; // true
```

## How it works?

This project using `typeof` operator trickly.

`typeof` operator always return a string.
Even with undeclared identifiers, it will return `'undefined'` instead of throwing an error.

```js
undeclared; // ReferenceError: undeclared is not defined

typeof undeclared; // 'undefined'
```

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#interaction_with_undeclared_and_uninitialized_variables)
- [ECMA-262 Spec](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator)

## License

[MIT](./LICENSE)
