---
title: Selection Sort
---

## Selection Sort

Selection Sort is one of the most simple sorting algorithms. It works in the following way,

1. Find the smallest element. Swap it with the first element.
2. Find the second smallest element. Swap it with the second element.
3. Find the third smallest element. Swap it with the third element.
4. Repeat finding the next smallest element and swapping it into the corresponding correct position till the array is sorted.

As you can guess, this algorithm is called Selection Sort because it repeatedly selects the next smallest element and swaps it into its place.

But, how would you write the code for finding the index of the second smallest value in an array? 

* An easy way is to notice that the smallest value has already been swapped into index 0, so the problem reduces to finding the smallest element in the array starting at index 1.

An implementation in C/C++ is as shown below,


```C
for(int i = 0; i < n; i++)
{
	int min_index = i;
	int min_element = a[i];
	
	for(int j = i +1; j < n; j++)
	{
		if(a[j] < min_element)
		{
			min_element = a[j];
			min_index = j;
		}
	}
	
	swap(&a[i], &a[min_index]);
}
```
### Properties

* Space Complexity: <b>O(n)</b>
* Time Complexity: <b>O(n<sup>2</sup>)</b>
* Sorting in Place: <b>Yes</b>

### Visualization

* [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
* [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

### References

* [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
* [KhanAcademy](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)
