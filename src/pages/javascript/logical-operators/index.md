---
title: Logical Operators
---
Logical operators compare Boolean values and return a Boolean response.  There are two types of logical operators - Logical AND, and Logical OR. These operators are often written as && for AND, and || for OR.

#### Logical AND ( && )

The AND operator compares two or more expressions and returns true only if all are true.  If one or all expressions evaluate false, the entire statement will return false.  
```js
true && true           // returns true
true && false          // returns false
false && false         // returns false
true && true && false  // returns false
true && true && true   // returns true
```

#### Logical OR ( || )

The OR operator compares two or more expressions and returns true when any expression is true.  All expressions can be true, but only one is needed to get a 'true' result.  
```js
true || true          // returns true
true || false         // returns true
false || false        // returns false
true || true || false // returns true
true || true || true  // returns true

```

#### More information:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators).
