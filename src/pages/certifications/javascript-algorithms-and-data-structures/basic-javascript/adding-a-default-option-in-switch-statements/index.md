---
title: Adding a Default Option in Switch Statements
---
## Adding a Default Option in Switch Statements

### Method:

- Switch statments a.k.a case control statements use **default** statement as a fallback statement i.e. it's executed when no other cases match.
- The **default** statement is similar to `else` clause in `if/else`.
- Syntax:
```javascript
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

### Solution:
```javascript
  switch(val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  ```
  
 ### References 
 
 Read more about switch statements at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).
