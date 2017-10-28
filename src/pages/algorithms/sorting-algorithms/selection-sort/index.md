---
title: Selection Sort
---
## Selection Sort

Selection Sort is a sorting algorithm that builds a sorted list in place. It is generally a slower-performing algorithm because it requires O(n^2) comparisons in both best-case and worst-case scenarios.

### Examples:

Take an array of 8 elements as follows:

[ 4 2 6 8 1 3 7 5]

The algorithm will begin by setting index 0 (in this case ```4```) as the minimum. Holding on to this value as the minimum, the algorithm proceeds by examining the remainder of the list. If a value is less than the minimum, its index replaces that of the previous minimum. Index 1 (```2```) would become the new minimum on the inner loop before index 4 (```1```) eventually becomes the final minimum of the unsorted portion of the list. At this point, since the index of the minimum value is not the same as the starting index, those values are swapped. The beginning of the list is now the sorted portion.

After one iteration, the list looks like this (sorted portion in bold):

[ __1__ 2 6 8 4 3 7 5 ]

The rest of the sorting process is as follows:

[ __1 2__ 6 8 4 3 7 5 ]

[ __1 2 3__ 8 4 6 7 5 ]

[ __1 2 3 4__ 8 6 7 5 ]

[ __1 2 3 4 5__ 6 7 8 ] _NOTE: even though the list is sorted at this point, the loops continue to check to ensure the value at index ```i``` is in fact the minimum value in the unsorted portion._

[ __1 2 3 4 5 6__ 7 8 ]

[ __1 2 3 4 5 6 7__ 8 ]

[ __1 2 3 4 5 6 7 8__ ]

### Algorithm
This is a general implementation of selection sort in pseudocode
```
for each item in list except the final element
    set the minimum value's index to the current item's index
    for each of the rest of the items in the list
        if a value is less than that at the minimum value's index
            update the minimum value's index to that of the smaller value
    if the minimum value's index is not the same as the current item's index in the outer loop
        swap the minimum value and the current item
```

### Implementation:
This is a basic implementation of selection sort in C.

```c
for (int i = 0; i < LENGTH - 1; i++)
{
	// set index of minimum value to i
    int min = i;
    
    // iterate through rest of numbers in list to update minimum value if necessary
    for (int j = i + 1; j < LENGTH; j++)
    {
        if (list[j] < list[min])
        {
            min = j;
        }
    }
    
    // swap positions of i and minimum if i isn't already the minimum
    if (min != i)
    {
        int temp = list[min];
        list[min] = list[i];
        list[i] = temp;
    }
}
```