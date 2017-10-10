---
title: Bubble Sort
---
## Bubble Sort

Bubble sort is one of the simplest sorting algorithm which compares each pair of adjacent elements and swaps them if they are not in correct order.

The following animation shows bubble sort in action.

![Bubble sort visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

###### (Image Source: Wikipedia; distributed under a CC-BY 3.0 license)

The bubble sort algorithm makes multiple passes through the array to compare adjacent elements and swap them if they are not in the right order. This is done till the whole array is sorted.

The source code for bubble sort in C is given below:

```c
void bubble_sort(int a[], int n)
{
    /* Declare the required variables. */
    int i, j, temp;
    
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n-1; j++)
        {
            /* Compare the two adjacent elements. */
            if (a[j] > a[j+1])
            {
                /* Swap elements into right order. */
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
}
```

The code above works correctly, but its performance can be improved by making certain optimizations.

In the first iteration of the outer loop, the smallest element from the array moves to the beginning of the array. In the next iteration, the second smallest element moves to the second position (which is actually the beginning of the unsorted portion of the array) and so on. In other words, the smallest element from the unsorted portion of the array _bubbles_ to the top after each iteration. Hence, the name bubble sort.

So in each iteration the number of comparisons reduce as smaller elements move into correct positions after each pass through the array. We can make use of this fact to reduce the upper limit of the inner loop and reduce the number of steps in the execution of thecode. The number of comparisons made in each pass is ```n-i-1```. Hence we can the upper limit for ```j``` to this value.

The above implementation goes through each step through both the loops even after array is sorted. After the whole is sorted, in the next iteration, no swaps would be made as everything is in order! This idea can be used to create a condition which breaks out of the loop when the array is sorted. 

We can do this by keeping track of the number of swaps made in each step by storing the swap count in a variable, and using a boolean flag variable, we can signal when to break out of the loop. If no swaps are made after a particular iteration, the value of swap counter would be 0 and the flag would be set to True which would cause the loop to stop.

The code for optimized version of bubble sort in given below.

```c
void optimized_bubble_sort(int a[], int n)
{
    /* Declare the required variables. */
    int i, j, temp;
    int swaps, is_sorted;
    
    /* Initially assume array is not sorted. */
    is_sorted = 0;
    
    /* Outer loop stops when array is sorted. */
    for (i = 0; i < n && !is_sorted; i++)
    {
        /* Keep track of number of swaps in each step. */
        swaps = 0;
        
        for (j = 0; j < n-1; j++)
        {
            /* Compare the two adjacent elements. */
            if (a[j] > a[j+1])
            {
                /* Swap elements into right order. */
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                
                /* Increment counter for swaps. */
                swaps++;
            }
        }
        
        /* Array is sorted if no swaps made in this iteration. */
        if (!swaps)
          is_sorted = 1;
    }
}
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

* [Full source code with main() function](https://ideone.com/aNGGyy)
* [Bubble Sort - Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
