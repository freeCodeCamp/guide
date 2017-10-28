---
title: Sorting Algorithm, ShellSort in ES6
---
## What is a Shell Sort Algorithm?
>Shellsort is an in-place comparison sort which can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements can move some out-of-place elements into position faster than a simple nearest neighbor exchange. Source [Wikipedia](https://en.wikipedia.org/wiki/Shellsort).



# Complexity of Shell Sort
| Best          | Average       | Worst      |
| ------------- |:-------------:| :---------:|
|  O(nlogn)     |   O(n^2)      | O(n^2)     | 


# The Code

```javascript
// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// gaps
const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
  for(let g = 0; g < gaps.length; g++) {
    const gap = gaps[g];
    for(let i = gap; i < array.length; i++) {
      const temp = array[i];
      let last = i;
      for(let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
        last -= gap;
      }
      array[last] = temp;
    }
  }
  return array;
}

console.log(shellsort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

