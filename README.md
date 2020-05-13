# node-self
🤙 self property in Node.js

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
- Safe
- No more bugs

## How to use?

Just using `self`. It's returns appropriate `Global Object` (Context Dependent)

Import [index.js](./index.js) or paste this code on the top

```javascript
!function () {
  typeof self !== 'object' && !!typeof global
    ? global.self = global : void null
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

- 2020.05.13: First Release (v1.0.0)

## License

[MIT](./LICENSE)
