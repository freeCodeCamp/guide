---
title: Understand the Prototype Chain
---
## Understand the Prototype Chain

### Method

To pass this challenge the `.isPrototypeOf()` method must be called on the `Object.prototype` object.

### Solution 

```javascript

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

```
