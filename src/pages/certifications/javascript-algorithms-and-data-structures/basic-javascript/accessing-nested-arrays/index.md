---
title: Accessing Nested Arrays
---
## Accessing Nested Arrays
In this guide you will be using bracket notation "[]" along with dot notation "." to access nested array elements.

## Hint 1:
  Use bracket notation to access the elements of the array
  arr[]
  
## Hint 2:
  use dot notation to access the elements of the nested array
  arr[].nestedArr[]
  
## Spoiler Alert - Solution Ahead!

## Solution:

// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Solution
