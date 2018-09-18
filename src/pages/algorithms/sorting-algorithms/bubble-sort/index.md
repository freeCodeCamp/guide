---
title: Bubble Sort
---
## Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

This is a very slow sorting algorithm compared to algorithms like quicksort, with worst-case complexity O(n^2). However, the tradeoff is that bubble sort is one of the easiest sorting algorithms to implement from scratch.

### Example:

#### First Pass:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.

( 1 5 4 2 8 ) –> ( 1 4 5 2 8 ), Swap since 5 > 4

( 1 4 5 2 8 ) –> ( 1 4 2 5 8 ), Swap since 5 > 2

( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.


#### Second Pass:

( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )

( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

#### Third Pass:

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

#### Properties
- Space complexity: O(1)
- Best case performance: O(n)
- Average case performance: O(n\*n)
- Worst case performance: O(n\*n)
- Stable: Yes

### Video Explanation
[Bubble sort in easy way](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

This code will use bubble sort to sort the array.
```js
let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9];
let sorted = false

while(!sorted) {
  sorted = true
  for(var i=0; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      sorted = false;
    }
  }
}
```

### More Information
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
- [Bubble Sort Algorithm - CS50](https://youtu.be/Ui97-_n5xjo)
- [Bubble Sort Algorithm - GeeksForGeeks (article)](http://www.geeksforgeeks.org/bubble-sort)
- [Bubble Sort Algorithm - MyCodeSchool (video)](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
- [Algorithms: Bubble Sort - HackerRank (video)](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
- [Bubble Sort Algorithm - GeeksForGeeks (video)](https://www.youtube.com/watch?v=nmhjrI-aW5o)

