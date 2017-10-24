---
title: Bubble Sort
---
## Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

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

### Bubble Sort Using JavaScript
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

### Bubble Sort Using Python
The code below uses bubble sort to sort a list of values.
It optimizes the algorithm by reducing the number of comparisons on each pass as well as stopping when the list is sorted.
```python
def bubble_sort(lst):
    """
    In-place sort using Bubble Sort.

    Implemented performance optimizations
    to reduce comparisons on each pass as
    well as halt sort when list sorted (no
    swaps occur during a pass).

    :param lst: list of items
    :return: None
    """
    if lst is None or len(lst) < 2:
        return

    # Reduce comparisons on each pass.
    for i in range(len(lst) - 1, 0, -1):
        swap_occurred = False

        for j in range(i):
            if lst[j] > lst[j+1]:
                lst[j], lst[j+1] = lst[j+1], lst[j]
                swap_occurred = True

        # Halt if list sorted
        if not swap_occurred:
            return


values = [1, 4, 7, 45, 7, 43, 44, 25, 6, 4, 6, 9]
bubble_sort(values)
print(values)
```
