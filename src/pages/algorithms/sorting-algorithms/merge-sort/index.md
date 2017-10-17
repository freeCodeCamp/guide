---
title: Merge Sort
---
## Merge Sort

Merge Sort is a <a href='https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms' target='_blank' rel='nofollow'>Divide and Conquer</a> algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

```Algorithm
MergeSort(arr[], left,  right):
If right > l:
     1. Find the middle point to divide the array into two halves: 
             mid = (left+right)/2 
     2. Call mergeSort for first half: 
             Call mergeSort(arr, left, mid) 
     3. Call mergeSort for second half:
             Call mergeSort(arr, mid+1, right)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, left, mid, right)
 ```

![Merge Sort algo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/300px-Merge_sort_algorithm_diagram.svg.png)

### Properties:
* Space Complexity: O(n)
* Time Complexity: O(n*log(n))
* Sorting In Place: No in a typical implementation
* Stable: Yes

### Relavant videos on freeCodeCamp YouTube channel
* <a href='https://youtu.be/TzeBrDU-JaY'>Merge Sort algorithm - MyCodeSchool</a>


