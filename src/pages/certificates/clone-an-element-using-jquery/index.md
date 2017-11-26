---
title: Clone an Element Using jQuery
---
jQuery has a function called`clone()` that makes a copy of an element.

For example, if we wanted to copy target2 from our left-well to our right-well, we would use
```javascript
    $("#target2").clone().appendTo("#right-well");
```