---
title: Let Declaration
---

# Let Declaration

`let` enables you to declare a variable for the scope of the current block. You should generally prefer `let` declaration in TypeScript instead of using `var` declaration.

```typescript
let bookCount: int;
```

"The scope of the current block" is the catch here. Assume a function which lists some fruits:

```typescript
function listFruits(): void {
  let fruits = ['Apple', 'Banana', 'Orange'];
  
  for (let i = 0; i < fruits.length; ++i) {
    console.log(i);
    console.log(fruits[i]);
  }
  
  console.log(i);
  console.log(fruits[i]);
}
```

Although you can output some increasing `i` values in `for` loop, the logging outside of the `for` loop is invalid. Since you have declared `i` in `for` loop, the program cannot access it outside of the `for` loop.
