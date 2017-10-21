---
title: Const Declaration
---

# Const Declaration

`const` is the keyword for declaring inreassignable variables in TypeScript.

```typescript
const book = {
  name: "Learn TypeScript with freeCodeCamp",
  publishDate: "2017-10-21"
};
```

The name of `const` is a bit misleading. The variables you declare with `const` are not actually constants. You cannot reassign them to another value, but you can change the information inside the variable:

```typescript
const book = {
  name: "Learn TypeScript with freeCodeCamp",
  publishDate: "2017-10-21"
};

console.log(book.publishDate); // Outputs "2017-10-21".

book.publishDate = "2017-10-22"; // This is completely valid.

console.log(book.publishDate); // Outputs "2017-10-22".

book = {
  name: "Learn TypeScript",
  publishDate: "2017-10-21"
}; // This is invalid.
```

As you can see, you can change the properties of the object you have assigned to the variable declared with `const` keyword, but you cannot reassign it to something else.
