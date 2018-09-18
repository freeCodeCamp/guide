---
title: Understand Where an Object’s Prototype Comes From
---
## Understand Where an Object’s Prototype Comes From

### Method

In the following example the `.isPrototypeOf()` function is called on the prototype of the `Bird` object. 

```javascript

Bird.prototype.isPrototypeOf(duck);
// returns true

```

Simply perform the same operation on the `Dog` obeject using `beagle` as the parameter.

### Solution 

```javascript

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);


```
