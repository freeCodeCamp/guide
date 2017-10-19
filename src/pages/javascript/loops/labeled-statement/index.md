---
title: Labeled Statement
---
## Information

A **labeled statement** is used to provide an identifier for a statement and lets you refer to it with a `break` or `continue` statement.

Syntax for labeled statements is as follows:

```
label :
   statement
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) | [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/labeled-statement-javascript) | [W3R](https://www.w3resource.com/javascript/statements/label.php)

## Examples

The following example uses a labeled `continue` with a `for` loop. It will skip when both `a = 0` and `b = 0` and continue in the `loop1:for`.

```javascript
let a, b;

loop1:
for (a = 0; a < 3; a++) {
  loop2:
  for (b = 0; b < 3; b++) {
    if (a === 0 && b === 0) {
      continue loop1;
    }
    console.log('a = ' + a + ', b = ' + b);
  }
}

// Output:
//  a = 1, b = 0
//  a = 1, b = 1
//  a = 1, b = 2
//  a = 2, b = 0
//  a = 2, b = 1
//  a = 2, b = 2
```

This example will use a labeled `break` on the top level `loop1:for` when it sees the conditional statements in the if statement.

```javascript
let a, b;

loop1:
for (a = 0; a < 3; a++) {
   loop2:
   for (b = 0; b < 3; b++) {
      if (a === 2 && b === 0) {
         break loop1;
      }
      console.log('a = ' + a + ', b = ' + b);
   }
}

// Output:
//  a = 0, b = 0
//  a = 0, b = 1
//  a = 0, b = 2
//  a = 1, b = 0
//  a = 1, b = 1
//  a = 1, b = 2
```
