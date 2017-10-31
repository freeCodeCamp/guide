---
title: Strings
---

# Strings
In JavaScript, the textual data is stored as strings. There is no separate type for a single character.
The internal format for strings is always UTF-16.

## Quotes
Strings can be enclosed within either single quotes, double quotes or backticks:
```javascript
 let single = 'single-quoted';
 let double = "double-quoted";
 let backticks = `backticks`;
```
there is no difference between single quotes and double quotes.but,
Backticks helps us to embed any expression into the string, including function calls:
```javscript
function sub(a, b) {
  return a - b;
}

alert(`3 - 2 = ${sub(3, 2)}.`); // 3 - 2 = 1.
```
moreover backticks allows a string to span multiple lines:
```javascript
let guestList = `Guests:
 * Harshit
 * Gaurav
 * Rahul
`;

alert(guestList); // a list of guests, multiple lines
```
If you try to use single or double quotes in the same way, there will be an error.
