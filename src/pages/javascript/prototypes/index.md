---
title: Prototypes
---
## Prototypes

JavaScript is a prototype-based language, so the prototype is one of the most important concepts which new JavaScript learners must know. This article will give you a short overview about this concept through examples. Before read the article, you need to have basic understanding [`this` reference in JavaScript](/javascript/this-in-javascript).

### Prototype object

For the sake of clarity, let's examine following example:

```javascript
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}
```

As `Point2D` function is declared, a property named `prototype` will be created by default for it (note that, in JavaScript, a function is also a object). The `prototype` property is also a object which contains `constructor` property and its value is `Point2D` function: `Point2D.prototype.constructor = Point2D`. And when you call `Point2D` with `new` keyword, *newly created objects will inherit all properties from* `Point2D.prototype`. To check that, you can add a method named `move` into `Point2D.prototype` as follow:

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

The prototype chain mechanism is simple: When you access a property `p` on object `obj`, the JavaScript engine will search this property inside `obj` object. If the engine fail to search, it continues searching in prototype of `obj` object and so on until reach `Object.prototype`. As the search finished, if not found, the result will be `undefined`. For example:

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

In above snippet, the statement `var obj2 = Object.create(obj1)` will create `obj2` object with prototype is `obj1` object. In other words, `obj1` becomes prototype of `obj2` instead of `Object.prototype` by default. As you see, though `b` is not a property of `obj2`, you can still access it by prototype chain. For `c` property, however, you get `undefined` value because it can't be found in `obj1` and `Object.prototype` as well.