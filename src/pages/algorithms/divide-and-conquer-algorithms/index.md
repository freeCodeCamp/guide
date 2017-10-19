---
title: Divide and Conquer Algorithms
---
## Divide and Conquer Algorithms
as the name suggests, these algorithms work by breaking down a problem into smaller subproblems. This algorithmic paradigm consistis of following three general steps:-
1. **Divide** - break the given problem
2. **Conquer** - Solve those smaller subproblems
3. **Combine** - Alas, put together the smaller pieces

### How do they work?
before speaking the asymptotic language of Theoretical Computer Science, let's take a look at this Illustration to get a gist of how such an algorithms works!

![QuickSort in Action](https://en.wikipedia.org/wiki/Quicksort#/media/File:Sorting_quicksort_anim.gif)
Notice how a problem is broken down to smaller sub-problems and then solved independently. Now, the question is, why would we wanna do that?

**Asymptotically Speaking**, the (time)complexity of a given approach is a mathematical function in (say) n where n is *certain input size*. Therefore, divide and conquer algorithms split the problem to obtain sub-problems of smaller data set so that it can perform faster than it would otherwise. 

### Implementation
There are two ways to implement Divide and Conquer algorithms- **Recursion** and **Iteration**

While generally it's easier to work on recursive algorithms, they've a [limitation](https://stackoverflow.com/a/27116426/6652196)! That is, they need stack to work. And it can be a problem when quite a lot of recursive calls are made. Therefore, iterative method is preferred.

##### List of Divide and Conquer Algorithms:
- Quicksort
    worst case time complexity : O(n^2)
    max depth of recursion tree    : O(n^2) (depends on location of pivot)
- MergeSort O(nlogn)
    worst case time complexity : O(nlogn)
    max depth of recursion tree    : O(logn) (always divided from middle)
- Binary Search, etc.


#### More Information:
1. [Algorithm Vault](github.com/ankitrai96/multilingual-algorithm-vault)
2. "Introduction to Algorithm" by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein
