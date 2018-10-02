---
title: Iterate Odd Numbers With a For Loop
---
## Iterate Odd Numbers With a For Loop

<br/>

## Hint: 

The defenition of a odd number is 2n+1 where 'n' is any number, and an even number is 2n. So if i = 0 and i += 2 returns even numbers, what would the value of i need to be to return odd numbers?


Now try to solve the challenge!

<br/>

## Spoiler-Alert Solution Ahead!

<br/>

## Solution:

```javascript

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

// Solution
for(let i = 1; i < 10; i += 2){
  myArray.push(i);
}

```
