---
title: Closures
---

# Closures

A closure is the combination of a function and the lexical environment within which that function was declared.

```js
function by(propName) {
    return function(a, b) {
        return a[propName] - b[propName];
    }
}

const person1 = {name: 'joe', height: 72};
const person2 = {name: 'rob', height: 70};
const person3 = {name: 'nicholas', height: 66};

const arr_ = [person1, person2, person3];

const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]

```

The closure 'remembers' the environment in which it was created.

Closures have many special applications that are useful when creating large javascript programs.

1. Emulating private variables or encapsulation
2. Making Assynchronous server side calls
3. Creating a block-scoped variable.

<b>Emulating private variables.</b>

Unlike many other languages, Javascript does not have a mechanism which allows you to create encapsulated instance variables within an object. Having public instance variables can cause alot of problems when biulding medium to large programs. However with closures, this problem can be mitigated.

Much like in the previous example, you can build functions which return object literals with methods that have access to the object's local variables without exposing them. Thus, making them effectively private.

Closures can also help you manage your global namespace to avoid collisions with globally shared data. Usually all global variables are shared between all scripts in your project, which will definitely give you alot of trouble when building medium to large programs. That is why library and module authors use closures to hide an entire module's methods and data. This is called the module pattern, it uses an immediately invoked function expression which exports only certain functionality to the outside world, significantly reducing the amount of global references.

Here's a short sample of a module skeleton.

```javascript
var myModule = (function() = {
    let privateVariable = 'I am a private variable';
    
    let method1 = function(){ console.log('I am method 1'); };
    let method2 = function(){ console.log('I am method 2, ', privateVariable); };
    
    return {
        method1: method1,
        method2: method2
    }
}());

myModule.method1(); // I am method 1
myModule.method2(); // I am method 2, I am a private variable
```

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' target='_blank' rel='nofollow'>MDN</a>
