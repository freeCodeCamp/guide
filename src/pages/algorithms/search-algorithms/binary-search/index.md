---
title: Binary Search
---
## Binary Search

A binary search algorithm finds an item in a sorted array.Suppose you’re searching for a number in an array (sorted array) normally without using binary search or any algorithm we would search on each item in the array to find that number , and if the array is so big like 100,000 items or more it will take lot of time to find the number specially ,if the number is found at the end of the array, so to over come this problem we will use Binary search to find the number .

Here is how binary search works under the hood ; it takes the sorted array and divides the array into halves .Then it searches the given number on one of the divided half of the array and if the number that we are looking for is less than the first half of the array it will eliminate the first half which doesn’t have the number being searched for and again try to divide the remaining half into other halves like the first one ,this process will continue till the number is found.If the number exists in the array, binary search will return the number’s position and if its can not find the number it will return null.

```def binary_search(array,item):
    low=0;
    high=len(array)-1;
    while low<=high:
        mid=(high+low);
        guess=array[mid];
        if guess== item:
            return mid;
        if guess > high:
            high=mid-1;
        else:
            low=mid+1;
    return None;

array=[1,4,5,7,11,13,20];```

print binary_search(array,15); # this will return None
print binary_search(array,7);  # This will return 3.

On the above code low and high are going to track which part of the array we are searching.

## Big O Notation

Efficient algorithms are judged by the time and space they take to complete.Big O notation is special notation that tells you how fast an algorithm is.To understand Big O notation we must be comfortable with logarithmic concepts. For example, suppose you have a list of size n. Simple search needs to check each element, so it will take n operations. The run time in Big notation is O(n). Big O notation lets you compare the number of operations. It tells you how fast the algorithm grows.

Binary search needs log n operations to check a list of size n. What’s the running time in Big O notation? It’s O(log n). For example if we have 100 sized item it will take 7 number of operations to complete the search. when I talk about running time in Big O notation, log always means log to the base 2.

Here are five Big O run times that you’ll encounter a lot, sorted from fastest to slowest:

    O(log n), also known as log time. Example: Binary search.
    O(n), also known as linear time. Example: Simple search.
    O(n * log n). Example: A fast sorting algorithm, like quick-sort
    O(n 2 ). Example: A slow sorting algorithm, like selection sort
    O(n!). Example: A really slow algorithm, like the traveling


Final thoughts

Binary search is a lot faster than simple search.

    O(log n) is faster than O(n), but it gets a lot faster once the list of
    items you’re searching through grows.
    Algorithm speed isn’t measured in seconds.
    Algorithm times are measured in terms of growth of an algorithm.
    Algorithm times are written in Big O notation.


### More Information
<a href="https://youtu.be/P3YID7liBug">Binary search (YouTube video)</a>


