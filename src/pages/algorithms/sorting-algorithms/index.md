---
title: Sorting Algorithms
---

## Sorting Algorithms
Sorting algorithms are a set of instructions that take an array or list as an input and arrange the items into a particular order.

Sorts are most commonly in numerical or a form of alphabetical (called lexicographical) order, and can be in ascending (A-Z, 0-9) or descending (Z-A, 9-0) order.

### Why Sorting Algorithms are Important
Since sorting can often reduce the complexity of a problem, it is an important algorithm in Computer Science. These algorithms have direct applications in searching algorithms, database algorithms, divide and conquer methods, data structure algorithms, and many more.

### Some Common Sorting Algorithms
Some of the most common sorting algorithms are:

* Selection Sort
* Bubble Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort
* Counting Sort
* Radix Sort
* Bucket Sort

### Classification of Sorting Algorithm
Sorting algorithms can be categorized based on the following parameters:

1. Based on Number of Swaps or Inversion
This is the number of times the algorithm swaps elements to sort the input. `Selection Sort` requires the minimum number of swaps.

2. Based on Number of Comparisons
This is the number of times the algorithm compares elements to sort the input. Using <a href='https://guide.freecodecamp.org/computer-science/notation/big-o-notation/' target='_blank' rel='nofollow'>Big-O notation</a>, the sorting algorithm examples listed above require at least `O(nlogn)` comparisons in the best case and `O(n^2)` comparisons in the worst case for most of the outputs.

3. Based on Recursion or Non-Recursion
Some sorting algorithms, such as `Quick Sort`, use recursive techniques to sort the input. Other sorting algorithms, such as `Selection Sort` or `Insertion Sort`, use non-recursive techniques. Finally, some sorting algorithm, such as `Merge Sort`, make use of both recursive as well as non-recursive techniques to sort the input.

4. Based on Stability
Sorting algorithms are said to be `stable` if the algorithm maintains the relative order of elements with equal keys. In other words, two equivalent elements remain in the same order in the sorted output as they were in the input.

* `Insertion sort`, `Merge Sort`, and `Bubble Sort` are stable
* `Heap Sort` and `Quick Sort` are not stable

### Counting sort

In computer science, counting sort is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an 
integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to 
determine the positions of each key value in the output sequence. Its running time is linear in the number of items and the difference between the 
maximum and minimum key values, so it is only suitable for direct use in situations where the variation in keys is not significantly greater than the 
number of items. However, it is often used as a subroutine in another sorting algorithm, radix sort, that can handle larger keys more efficiently.

Because counting sort uses key values as indexes into an array, it is not a comparison sort, and the O(n log n) lower bound for comparison sorting does
 not apply to it. Bucket sort may be used for many of the same tasks as counting sort, with a similar time analysis; however, compared to counting 
sort, bucket sort requires linked lists, dynamic arrays or a large amount of preallocated memory to hold the sets of items within each bucket, whereas 
counting sort instead stores a single number (the count of items) per bucket.

#### Input and output assumptions
In the most general case, the input to counting sort consists of a collection of n items, each of which has a non-negative integer key whose maximum value 
is at most k.[3] In some descriptions of counting sort, the input to be sorted is assumed to be more simply a sequence of integers itself, but this 
simplification does not accommodate many applications of counting sort. For instance, when used as a subroutine in radix sort, the keys for each call 
to counting sort are individual digits of larger item keys; it would not suffice to return only a sorted list of the key digits, separated from the items.

In applications such as in radix sort, a bound on the maximum key value k will be known in advance, and can be assumed to be part of the input to the 
algorithm. However, if the value of k is not already known then it may be computed, as a first step, by an additional loop over the data to determine the 
maximum key value that actually occurs within the data.

The output is an array of the items, in order by their keys. Because of the application to radix sorting, it is important for counting sort to be a 
stable sort: if two items have the same key as each other, they should have the same relative position in the output as they did in the input.
The algorithm
In summary, the algorithm loops over the items, computing a histogram of the number of times each key occurs within the input collection. It then 
performs a prefix sum computation (a second loop, over the range of possible keys) to determine, for each key, the starting position in the output
 array of the items having that key. Finally, it loops over the items again, moving each item into its sorted position in the output array.
In pseudocode, this may be expressed as follows:
```C++
# variables:
#    input -- the array of items to be sorted; 
#    key(x) -- function that returns the key for item x
#    k -- a number such that all keys are in the range 0..k-1
#    count -- an array of numbers, with indexes 0..k-1, initially all zero
#    output -- an array of items, with indexes 0..n-1
#    x -- an individual input item, used within the algorithm
#    total, oldCount, i -- numbers used within the algorithm

# calculate the histogram of key frequencies:
for x in input:
    count[key(x)] += 1

# calculate the starting index for each key:
total = 0
for i in range(k):   # i = 0, 1, ... k-1
    oldCount = count[i]
    count[i] = total
    total += oldCount

# copy to output array, preserving order of inputs with equal keys:
for x in input:
    output[count[key(x)]] = x
    count[key(x)] += 1

return output
```
After the first for loop, count[i] stores the number of items with key equal to i. After the second for loop, it instead stores the number of items 
with key less than i, which is the same as the first index at which an item with key i should be stored in the output array. Throughout the third loop, 
count[i] always stores the next position in the output array into which an item with key i should be stored, so each item is moved into its correct 
position in the output array. The relative order of items with equal keys is preserved here; i.e., this is a stable sort.
