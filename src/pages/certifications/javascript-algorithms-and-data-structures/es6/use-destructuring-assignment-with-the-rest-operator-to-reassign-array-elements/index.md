---
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
---
## Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

## Hint 1

Use descructuring to create the `arr` variable.

```javascript
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [arr] = list; // change this
  // change code above this line
  return arr;
}
```

## Hint 2 

Spread the `list` parameter into `arr`.

```javascript
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [...arr] = list; // change this
  // change code above this line
  return arr;
}
```

## Hint 3 - Spoiler Alert - Solution Ahead!

Sip the first two elements of the `arr` array with `,,`.

```javascript
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [,,...arr] = list; // change this
  // change code above this line
  return arr;
}
```

