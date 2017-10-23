---
title: Logical Operators
---
Logical operators compare Boolean values and return a Boolean response.  There are two types of logical operators - Logical AND, and Logical OR. These operators are often written as && for AND, and || for OR.

#### Logical AND ( && )

The AND operator compares two expressions and returns thruthy only if both are true.  If one or both expressions evaluate false, the entire statement will return false.  
```js
true && true //returns true
true && false //returns false
false && false //returns false
```

#### Logical OR ( || )

The OR operator compares two expressions and returns truthy if either expression is true.  Both expressions can be true, but only one is needed to get a truthy result.  
```js
true || true //returns true
true || false //returns true
false || false //returns false
```

#### Tips:
Both logical operators will return the value of the last evaluated expression. For example:

```js
"cat" && "dog" //returns "dog"
"cat" && false //returns false
0 && "cat"  //returns 0 (which is a falsy value)

"cat" || "dog" //returns "cat"
"cat" || false //returns "cat"
0 || "cat" //returns "cat"
```

#### More information:

[Javascript Truth Table](https://guide.freecodecamp.org/javascript/truth-table)

[MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
