---
title: Falsey Values
---

# Falsey Values
A falsey value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: `undefined`, `null`, `NaN`, `0`, `""` (empty string), and `false` of course.

## Checking for falsey values on variables
It is possible to check for a falsey value in a variable with a simple conditional:
```javascript
if (!variable) {
  // When the variable has a falsey value the condition is true.
}
```

See also: <a>**truthy**</a> | <a href='http://james.padolsey.com/javascript/truthy-falsey/' target='_blank' rel='nofollow'>Truthy & Falsey blog post</a>
