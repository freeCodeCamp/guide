---
title: Change the Prototype to a New Object
---
## Change the Prototype to a New Object

### Method:

- In JS `.prototype` on a function constructor is an object.
- In previous challenges we've made use of dynamic nature of the objects and modified them at runtime. 
- Example:
```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}
```
- While this way works it can become tedious to do so for each property and method to be added to the object.
- This can be reduced by treating `.prototype` as an object literal and adding properties/methods directly to it.
- Example:
```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

### Solution:

```js
Dog.prototype = {
  numLegs: 4,
  describe: function(){
    console.log("I'm a doggo and I'm humans best friend!");
  },
  eat: function(){
    console.log("woof woof-nom nom nom");
  }
};
```
- Newer syntax - In ES6 we can remove the function keyword:
```js
Dog.prototype = {
  numLegs: 4,
  describe(){
    console.log("I'm a doggo and I'm humans best friend!");
  },
  eat(){
    console.log("woof woof-nom nom nom");
  }
};
```

### References:
Read more about prototypes at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
[YDKJS: This & Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)
