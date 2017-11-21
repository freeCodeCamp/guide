---
title: this reference
---
## `this` reference

In JavaScript, every function has a `this` reference automatically created when you declare it. This reference is quite similar to `this` reference in other class-based languages such as Java or C# (JavaScript is a prototype-based language and no "class" concept): *It points to the object that is calling the function* (this object sometimes called as *context*). In JavaScript, however, *the `this` reference inside functions can be bound to different objects depending on where the function is being called*. Here are 5 basic rules for `this` binding in JavaScript:

### Rule 1

When a function is called in the global scope, the `this` reference is by default bound to the **global object** (`window` in the browser, or `global` in Node.js). For example:

```javascript
function foo() {
  this.a = 2;
}

foo();
console.log(a); // 2
```
If `this` is not invoked with a specific object, and perhaps the function that `this` is defined in is not built inside of any object, then `this` will by default refer to the global window object.

Note: If you declare the `foo()` function above in strict mode, then you call this function in global scope, `this` will be `undefined` and assignment `this.a = 2` will throw `Uncaught TypeError` exception.

### Rule 2

Let's examine example below:

```javascript
function foo() {
  this.a = 2;
}

var obj = {
  foo: foo
};

obj.foo();
console.log(obj.a); // 2
```

Clearly, in the above snippet, the `foo()` function is being called with the *context* of `obj` object and `this` reference now is bound to `obj`. So when a function is called with a context object, the `this` reference will be bound to this object.

### Rule 3

If you ever want to "borrow" a method from another object, `.call`, `.apply` and `.bind` can all be used at the call site to explicitly bind `this` to another object. Using `.bind(this)` is something you may see in quite a lot of React components.

```javascript
var foo = function() {
  console.log(this.bar)
}

foo.call({ bar: 1 }) // 1
```

Here's a quick example of how each one is used to bind `this`:

- `.call()`: `fn.call(thisObj, fnParam1, fnParam2)`
- `.apply()`: `fn.apply(thisObj, [fnParam1, fnParam2])`
- `.bind()`: `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

### Rule 4

```javascript
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}

var p1 = new Point2D(1, 2);
console.log(p1.x); // 1
console.log(p2.y); // 2
```

The thing you must notice that is the `Point2D` function is called with `new` keyword, and the `this` reference is bound to the new `p1` object. So when a function is called with `new` keyword, it will create a new object and `this` reference will be bound to this object. This is called object instantiation, and this particular type that uses the `this` keyword is called pseudoclassical object instantiation.

### Rule 5

And last but not least, `this` is not assigned a value until an object invokes the function where `this` has been defined.

### Other resources

- <a href='http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/' target='_blank' rel='nofollow'>javascriptissexy.com</a>
- <a href='https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md' target='_blank' rel='nofollow'>You Don't Know JS</a>
