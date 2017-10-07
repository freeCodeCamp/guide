---
title: Higher Order Functions
---
## Higher Order Functions

A higher order function is just a function that takes another function as an argument. The function that is being passed is called a _callback_. One of the higher order functions that you might be familiar with is _map_ :

```javascript
var cats = [
  { name: "Fluffy", age = 3 },
  { name: "Leo", age = 5 },
  { name: "Simon", age = 6 },
  { name: "Simba", age = 1 },
  { name: "Max", age = 2 }
];

var catAges = cats.map(callback);

function callback(cat) {
  return cat.age * 7;
};

// catAges = [21, 35, 42, 7, 14]
```

In the example above, the _map_ function is a built-in JavaScript higher-order function, and it expects a _callback_ function as its argument. You can also make your own higher order function using a callback.
