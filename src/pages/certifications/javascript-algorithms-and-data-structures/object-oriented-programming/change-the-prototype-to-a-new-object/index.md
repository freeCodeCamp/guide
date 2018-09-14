---
title: Change the Prototype to a New Object
---
## Change the Prototype to a New Object

### Method

Simply add the new properties to the `prototype` object like so.

```javascript

Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  Property2: 3,
  property3: 4
};

```
Remember to use the correct syntax for the two methods `eat()` and `describe`.

```javascript

functionName: function() {
  \\code to be executed by function
  }
  
```

### Solution

```javascript

function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function() {
    	console.log("This dog eats babies.");
  },
  describe: function() {
    console.log("He's very friendly");
  }
};

```
