---
title: Installation
---
## Installation

![Installation](https://i.imgur.com/9ILjA1q.jpg)

To get started yourself, the two things you will need are the TypeScript compiler and a editor that supports TypeScript.

In the above screenshot, I'm installing both the compiler and [TSLint](https://github.com/palantir/tslint) (which is similar to [ESLint](https://eslint.org/)) using `npm` in [Visual Studio Code](https://code.visualstudio.com/)’s integrated terminal.

### Commands

> Installing TypeScript

```bash
npm i -g typescript
```

> *Optional* Installing TSLint

```bash
npm i -g tslint
```

> Compiling a single file down to JavaScript

```bash
tsc multiplication.ts
```

> Configuration Options

```bash
touch tsconfig.json
```

### Configuration Options

With larger projects, there’s also the option to create a [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file that specifies the root files and compiler options.

Withing your [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file, for example, you could specify that you want TypeScript to compile down to ES5 instead of ES6.


### Example

![Multiplication](https://i.imgur.com/V5nP3xj.jpg)

In the screenshot above, you can see two files - `multiplication.js` and `multiplication.ts`.

This program just prints out the product of two numbers I’ve pre-defined.

> `multiplication.ts`

```typescript
let a: number = 10;
let b: number = 2;

function showProduct(first: number, second: number): void {
  console.info("Mathematical! The result is " + first * second + ".");
}

showProduct(a, b);

// Mathematical! The result is 20.
```

Once I've finished creating `multiplication.ts`, I can compile it down to JavaScript using the `tsc` command which stands for TypeScript compile.

> `multiplication.js`

```javascript
var a = 10;
var b = 2;

function showProduct(first, second) {
    console.info("Mathematical! The result is " + first * second + ".");
}

showProduct(a, b);

// Mathematical! The result is 20.
```
