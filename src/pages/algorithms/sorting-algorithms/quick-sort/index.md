---
title: Quick Sort
---
## Quick Sort

Quick sort is an effiecient divide and conquer sorting alorithm. It works by recursively partitioning the list along a pivot element.

Average case time complecity of Quick Sort is O(nlog(n)) with worst case time complexity being O(n^2). The choice of the pivot plays an important role in determinng the efficiency fo the sort algorithm.

The steps involved in Quick Sort are :
- Picking an element, the pivot element, from the array.
- Partitioning: The array is reordered. All elements smaller than the pivot come before it. All elements greater than the pivot appear after it. The pivot is settled in its final place after this operation.
- Recursively apply the above steps to the elements which are smaller and greater than the pivot in the array, separately.

A quick implementation in C++ is as shown below :

```cpp
vector<int> quick_sort(vector<int> arr) {
	int n = arr.size();
	
	if (n <= 1) {
		// arr of zero or one elements is sorted, by definition
		return arr;
	}

	// choose pivot – here we are choosing a random pivot
	int pivot = arr[rand()%n];

	// low, high and final result
	vector<int> l, h, res;

	for (int i=0; i<n; i++) {
		// partition arr using pivot
		if (arr[i] < pivot) {
			l.push_back(arr[i]);
		}
		else if (arr[i] > pivot) {
			h.push_back(arr[i]);
		}
	}

	l = quick_sort(l);
	h = quick_sort(h);

	// append low to result
	res = l;
	// append pivot to result
	res.push_back(pivot);
	// append high to result
	res.insert(res.end(), h.begin(), h.end());

	return res;
}
```


#### More Information:

- <a href='https://en.wikipedia.org/wiki/Quicksort' target='_blank' rel='nofollow'>Wikipedia</a>
