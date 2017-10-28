---
title: Sorting Algorithm, InsertionSort in ES6
---
## What is a Insertion Sort Algorithm?
>Insertion sort algorithm iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain. Source [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort).



# Complexity of Insertion Sort
| Best          | Average       | Worst      |
| ------------- |:-------------:| :---------:|
|  O(n)         |   O(n^2)      | O(n^2)     | 


# The Code

```javascript
// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

