---
title: Logical Operators
---
Logical operators compare Boolean values and return a Boolean response. There are two types of logical operators - Logical AND, and Logical OR. These operators are often written as && for AND, and || for OR.

#### Logical AND ( && )

The AND operator compares two expressions and returns true only if both are true. If one or both expressions evaluate to false, the entire statement will return false.  
```js
true && true //returns true
true && false //returns false
false && true //returns false
false && false //returns false
```

#### Logical OR ( || )

The OR operator compares two expressions and returns true if at least one of the expressions are true. When the first true expression is found, the remaining expressions are not evaluated anymore and the result is true.
```js
true || true //returns true
true || false //returns true
false || true //returns true
false || false //returns false
```

#### More information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators' target='_blank' rel='nofollow'>MDN</a>.
