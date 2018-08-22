---
title: Use class Syntax to Define a Constructor Function
---
## Use class Syntax to Define a Constructor Function


Spoiler Warning: here is a basic solution to this challenge in case you're stuck.

```javascript
function makeClass() {
  "use strict";
  /* Alter code below this line */

   class Vegetable {
     constructor(Vegetable){
       this.Vegetable = Vegetable;
  
     }
   }

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```
