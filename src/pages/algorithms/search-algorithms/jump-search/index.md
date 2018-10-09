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

![Jumping Search 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Jump steps

In the worst case, we have to do n/m jumps and if the last checked value is greater than the element to be searched for, we perform m-1 comparisons more for linear search. Therefore the total number of comparisons in the worst case will be ((n/m) + m-1). The value of the function ((n/m) + m-1) will be minimum when m = √n. Therefore, the best step size is m = √n.

# Code 
To view examples of code implementation of this method access this link below:

[Jump Search - OpenGenus/cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# Credits

[The logic's array image](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)
