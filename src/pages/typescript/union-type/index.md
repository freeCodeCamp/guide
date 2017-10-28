---
title: Union Type
---

# Union Type

An union type represents a value that may contain one among a set of types. For example, a value that may contain either a string or a number can be represented as follows:

```typescript
let foo: string | number;

foo = 2 // This is okay
foo = 'bar' // This is okay as well

foo = true // This fails at compile time
```
