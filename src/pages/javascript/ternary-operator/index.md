---
title: Ternary Operator
---
The Ternary operator replaces an `if`/`else` block in a condensed format. The following is the general format of the ternary operator.

```
condition ? expr1 : expr2
```

## Description

If condition is true, the operator resolves to the value of expr1; otherwise, it resolves to the value of expr2. 

For example, to display a different message based on the value of the isMember variable, you could use this statement:

```javascript
let isMember = true;

let message = isMember ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back'
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/M8Ge/1' target='_blank' rel='nofollow'>Run Code</a>

**Read more:** <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>MDN</a>
