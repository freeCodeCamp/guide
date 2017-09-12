---
title: Tuple Type
---

# Tuple Type

Express an array in which a fixed number of elements of types is known, but not the same.

```typescript
let arr: [string, number];
// This is correct
arr = ['Hello', 7];
//This is incorrect
arr = [7, 'Hello'];
```

When accessing an element outside the known indices, it will use a union type:

```typescript
arr[3] = 'World!' // OK, 'string' can be assigned to 'string | number'

arr[5] = false;   // Error, 'boolean' is not a 'string | number'
``` 

Union types are an advanced topic, see the [Union Types](http://#) article.