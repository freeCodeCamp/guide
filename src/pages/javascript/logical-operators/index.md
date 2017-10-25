---
title: Logical Operators
---
Logical operators compare Boolean values and return a Boolean response.  There are two types of logical operators - Logical AND, and Logical OR. These operators are often written as && for AND, and || for OR.

#### Logical AND ( && )

The AND operator compares two expressions and returns true only if both are true.  If one or both expressions evaluate false, the entire statement will return false.  
```js
true && true //returns true
true && false //returns false
false && false //returns false
```

#### Logical OR ( || )

The OR operator compares two expressions and returns true only either expression is true.  Both expressions can be true, but only one is needed to get a 'true' result.  
```js
true && true //returns true
true && false //returns true
false && false //returns false
```
**The Logical OR ( || )** operator will behave like ternary operator also in javascript. it is used as a shorthand to define default value for objects and also we add and manipulate our properies and values to an object without disturbing the existing values.

```js
var myObj = myObj || {};
```

if myObj is not  undefined, null, empty or false it will return left operand otherwise it will return right operand. it behave like ternary operator and it is equivalent to ```js var myObj = myObj?myObj:{}; ```.


#### More information:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators).
