---
title: Logical Operators
---
Logical operators compare Boolean values and return a Boolean response.  There are two types of logical operators - Logical AND, and Logical OR. These operators are often written as && for AND, and || for OR.

#### Logical AND ( && )

The AND operator compares two expressions. If the 1st evaluates as ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), the statement will return the value of the 2nd expression.
If the 1st evaluates as ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), the statement will return the value of the 1st expression.
```js
true && true //returns  the 2nd value, true
true && false //returns the 2nd value, false
false && false //returns the 1st value, false
123 && 'abc' // returns the 2nd value, 'abc'
'abc' && null //returns the 2nd value, null
undefined && 'abc' //returns the 1st value, undefined
0 && false //returns the 1st value, 0
```

#### Logical OR ( || )

The OR operator compares two expressions. If the first evaluates as "falsey", the statement will return the value of the 2nd expression. If the first evaluates as "truthy", the statement will return the value of the 1st expression.
```js
true && true //returns the 1st value, true
true && false //returns the 1st value, true
false && false //returns the 2nd value, false
123 && 'abc' // returns the 1st value, 123
'abc' && null //returns the 1st value, 'abc'
undefined && 'abc' //returns the 2nd value, 'abc'
0 && false //returns the 2nd value, false
```

Note that where `&&` returns the 1st value, `||` returns the 2nd value and vice versa.

#### More information:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators).
