---
title: Array.prototype.reduce
---
## Array.prototype.reduce

The `reduce()` method returns a single value from all the array's values.

This method needs a callback that gets two parameters from it:

1. The accumulator

2. the value of the current item

and returns the new accumulator value.

### For example
```js
let array = [1, 2, 3, 4];
let sum = array.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
}); // 10

// THAT'S THE SAME AS:
let accumulator = 0;
for (let i = 0; i < array.length; i++){
  accumulator += array[i];
}
sum = accumulator; // 10

// you can also use this method with other "type" of array, not only numeric arrays

let words = ["I", "am", "Davide"];
let sentence = words.reduce(
function(accumulator, currentValue){
  return accumulator + " " + currentValue;}
); // "I am Davide"
```

#### Advance usage

You can also set the **initial value** that is the start value of the accumulator

```js
let name = ["D", "a", "v", "i", "d", "e"];
console.log(name.reduce(
  function(a, cv){return a + cv;}, "Your name is: "); // Your name is: Davide

// THAT'S THE SAME AS:
let accumulator = "";
for (let i = 0; i < name.length; i++){
  if (i === 0){
    accumulator = "Your name is: ";
  }
  accumulator += name[i];
}
console.log(accumulator); // Your name is: Davide

//OR
let accumulator = "Your name is: ";
for (let i = 0; i < name.length; i++){
  accumulator += name[i];
}
console.log(accumulator); // Your name is: Davide
```

You can also use this method to **filter an array**:

```js
let heights = [181, 167, 124, 156, 172, 146];
let playersHeights = heights.reduce(function(a, cv){
  return cv >= 150 ? [...a, cv] : a;
}, []); // [181, 167, 156, 172]

// in this way we return an array containing the heights of the people that can play(h >= 150cm).

```
