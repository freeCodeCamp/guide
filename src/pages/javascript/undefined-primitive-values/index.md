---
title: Undefined Primitive Value
---

The special value `undefined` stands apart. It makes a type of its own, just like `null`. The meaning of `undefined` is “value is not assigned”. If a variable is declared, but not assigned, then its value is exactly `undefined`:

```javascript
let x;
alert(x); // shows "undefined"
```

Technically, it is possible to assign `undefined` to any variable:

```javascript
let x = 123;
x = undefined;
alert(x); // "undefined"
```

…But it’s not recommended to do that. Normally, we use `null` to write an “empty” or an “unknown” value into the variable, and `undefined` is only used for checks, to see if the variable is assigned or similar.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined' target='_blank' rel='nofollow'>MDN</a>
