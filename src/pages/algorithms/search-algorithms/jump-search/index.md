---
title: Jump Search
---

## Jump Search
A jump search locates an item in a sorted array by jumping k itens and then verify if the item wanted is between 
the previous jump and current jump.

# Complexity Worst Case
O(√N)

# Works
1. Define the value of k, the number of jump: Optimal jump size is √N where the N is the length of array
2. Jump the array k-by-k searching by the condition `Array[i] < valueWanted < Array[i+k]`
3. Do a linear search between `Array[i]` and `Array[i + k]`


# Code 

```C
int jumpSearch(int a[], int x, int n) { 
    int step = sqrt(n); 
    int p = 0; 
    while (a[min(step, n)-1] < x) { 
        p = step; 
        step += sqrt(n); 
        if (p >= n) 
            return -1; 
    } 
    while (a[p] < x) 
    { 
        p++; 
        if (p == min(step, n)) 
            return -1; 
    } 
    if (a[p] == x) 
        return p; 
  
    return -1; 
} 
```
# Credits

[The logic's array image](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)
