---
title: Use Inheritance So You Don't Repeat Yourself
---
## Use Inheritance So You Don't Repeat Yourself

### Method

To pass this challenge simply remove the `eat()` function from all other animals and rewrite it into the `Animal.protoype` object. The fucntion can now be called on all other animals as the `Animal` object is the `supertype` of all animals in the code.

### Solution 

```javascript

function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

```
