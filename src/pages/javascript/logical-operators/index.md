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

#### More information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators' target='_blank' rel='nofollow'>MDN</a>.
