---
title: Union Type
---

# Union Type

An union type represents a value that may contain one among a set of types. For example, a value that contains either a string or a number can be represented as follows:

```typescript
let foo: string | number;

foo = 2 // This is okay
foo = 'bar' // This is okay as well

foo = true // This fails at compile time
```

This is useful when doing something that's rather common in JavaScript code: writing functions that accepts more than one type for one of its arguments.

This leads to an important TypeScript feature concerning union types: if the type of a variable can be inferred inside a code branch, it can be used safely as if it had the inferred type:

```typescript
function doSomething(foo: string | number) {
  if (typeof foo === 'string') {
    // inside this block, foo can be treated as a string safely
  } else {
    // and here, as a number.
  }
}
```

### More information

[Advanced Types - TypeScript handbook](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
