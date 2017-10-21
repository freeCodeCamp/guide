---
title: Enums
---

# Enums

Enums are named constants in TypeScript. You use `enum` keyword the define enums.

```typescript
enum Color {
  Red,
  Green,
  Blue
}
```

Then you can use them in functions:

```typescript
function setColor(color: Color): void {
  // ...
}

setColor(Color.Green);
```
