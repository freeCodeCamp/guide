---
title: Prototypes
---
## Prototypes

JavaScript is a prototype-based language, therefore understanding the prototype object is one of the most important concepts which  JavaScript practitioners need to know. This article will give you a short overview of the Prototype object through various  examples. Before reading this article, you will need to have a basic understanding of  [`this` reference in JavaScript](/javascript/this-in-javascript).

### Prototype object

For the sake of clarity, let's examine the following example:

```javascript
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}
```

As `Point2D` function is declared, a property named `prototype` will be created by default for it (note that, in JavaScript, a function is also a object). The `prototype` property is also a object which contains a `constructor` property and its value is `Point2D` function: `Point2D.prototype.constructor = Point2D`. And when you call `Point2D` with `new` keyword, *newly created objects will inherit all properties from* `Point2D.prototype`. To check that, you can add a method named `move` into `Point2D.prototype` as follow:

```javascript
Point2D.prototype.move = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}

var p1 = new Point2D(1, 2);
p1.move(3, 4);
console.log(p1.x); // 4
console.log(p1.y); // 6
```

The `Point2D.prototype` is called **prototype object** or **prototype** of `p1` object and for any object created with `new Point2D(...)` syntax. You can add more properties to `Point2D.prototype` object as you like. The common pattern is declare methods to `Point2D.prototype` and other properties will be declared in constructor function.

Built-in objects in JavaScript is constructed similar as above. For example:

- Prototype of objects created with `new Object()` or `{}` syntax is `Object.prototype`.
- Prototype of arrays created with `new Array()` or `[]` syntax is `Array.prototype`.
- And so on with other built-in objects such as `Date` and `RegExp`.

`Object.prototype` is inherited by all objects and it has no prototype (its prototype is `null`).

### Prototype chain

The prototype chain mechanism is simple: When you access a property `p` on object `obj`, the JavaScript engine will search this property inside `obj` object. If the engine fails to search, it continues searching in the  prototype of `obj` object and so on until reaching `Object.prototype`. If after the search has finished, and nothing has been found the result will be `undefined`.
For example:

```javascript
var obj1 = {
  a: 1,
  b: 2
};

var obj2 = Object.create(obj1);
obj2.a = 2;

console.log(obj2.a); // 2
console.log(obj2.b); // 2
console.log(obj2.c); // undefined
```

In above snippet, the statement `var obj2 = Object.create(obj1)` will create `obj2` object with prototype  `obj1` object. In other words, `obj1` becomes the prototype of `obj2` instead of `Object.prototype` by default. As you can see,  `b` is not a property of `obj2`, you can still access it via the  prototype chain. For `c` property, however, you get `undefined` value because it can't be found in `obj1` and `Object.prototype`.
