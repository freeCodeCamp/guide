---
title: Quick Sort
---
## Quick Sort

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Bubble Sort is a basic sorting algorithm. Bubble Sort goes through each item of an unsorted list and compares each pair of adjacent items. Then swaps the two if they're in the wrong order.

Bubble Sort is perfect for small data sets like an array with a small amount of items. Such as an array with 20 elements that contains Integers.

Implementation for Bubble Sort is faster than other sorting algorithms. For example, this is the implementation in Java:
```java
for(a = 1; a < size; a++) {
  for(b = size-1; b >= a; b--) {
    if(nums[b-1] > nums[b]) {
      //exchange elements
      temp = nums[b-1];
      nums[b-1] = nums[b];
      nums[b] = temp;
    }
  }  
}
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* https://en.wikipedia.org/wiki/Bubble_sort

