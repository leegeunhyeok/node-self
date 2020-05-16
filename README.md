# node-self
🤙 self property in Node.js

[![npm version](https://img.shields.io/npm/v/node-self.svg?maxAge=2592000)](https://badge.fury.io/js/node-self)
[![npm version](https://img.shields.io/npm/dt/node-self.svg)](https://badge.fury.io/js/node-self)


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

> Why?: `self` property is not implement in Node.js.

## Feature

You can use `self` property in Node.js.

- Super light weight
- Pure Javascript
- Zero dependency
- Safe
- No Bundler/Transfiler/Other
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
  typeof self === 'undefined' && typeof global === 'object'
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

## History

- 2020.05.16: Update code (v1.0.0-c)
- 2020.05.14: Fix condition, Update document (v1.0.0-b)
- 2020.05.13: Fix condition (v1.0.0-a)
- 2020.05.13: First Release (v1.0.0)

## License

[MIT](./LICENSE)
