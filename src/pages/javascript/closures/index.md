---
title: Closures
---

# Closures

A closure is the combination of a function and the lexical environment or context within which that function was declared.

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

The closure 'remembers' the environment or context in which it was created.

The context in Javascript is brakets based, that means, if you declare a variable, it'll be available all over from the opening braket until the closing braket. This is what we call clousure and this is why you can have `propName` available in inner functions.

```js
function by(propName) {
    return function(a, b) {
        return a[propName] - b[propName];
    }
}
```

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' target='_blank' rel='nofollow'>MDN</a>
