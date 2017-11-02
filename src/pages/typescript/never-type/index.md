---
title: Never Type
---

# Never Type

`never` is the type of value that never occurs.  
`never` is the return type for function or arrow expression that always throws an exception or never returns.  
No type is a subtype or assignable to `never` (except `never` itself).

```typescript
// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```