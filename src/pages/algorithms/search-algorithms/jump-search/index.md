---
title: Jump Search
---
## Jump Search
<p>A jump search locates an item in a sorted array by jumping k itens and then verify if the item wanted is between 
the previous jump and current jump.</p>

# Complexity Worst Case
O(√N)

# Works
1. First, define the value of k, that is the number of jump: Optimal jump size is √N where the N is the length of array.
2. Jumping the array k-by-k searching by the condition that is: Array[i] < valueWanted < Array[i+k];
3. Do a linear search between Array[i] and Array[i + k].

![Jumping Search 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Code 
To view examples of code implementation of this method access this link below:

[Jump Search - OpenGenus/cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)


# Credits

[The logic's array image](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)
