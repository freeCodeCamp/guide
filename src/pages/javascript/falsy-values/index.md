---
title: Falsy Values
---

# Falsy Values
A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsy values in JavaScript: `undefined`, `null`, `NaN`, `0`, `""` (empty string), and `false` of course.

## Checking for falsy values on variables
It is possible to check for a falsy value in a variable with a simple conditional:
```javascript
if (!variable) {
  // When the variable has a falsy value the condition is true.
}
```

See also: <a>**truthy**</a> | <a href='http://james.padolsey.com/javascript/truthy-falsey/' target='_blank' rel='nofollow'>Truthy & Falsey blog post</a>

## Caveat
Be aware of the data type when evaluating a value in a Boolean context. If the data type of the value is meant to be a _number_, the truthy/falsy evalution can result in an unexpected outcome:
```javascript
const match = { teamA: 0, teamB: 1 }
if (match.teamA)
  // The following won't run due to the falsy evaluation
  console.log('Team A: ' + match.teamA);
}
```
An alternative to the use case above is to evaluate the value using `typeof`:
```javascript
const match = { teamA: 0, teamB: 1 }
if (typeof match.teamA === 'number')
  console.log('Team A: ' + match.teamA);
}
```

## More Information
[ Falsy | Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

[Truthy and Falsy: When All is Not Equal in JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)
