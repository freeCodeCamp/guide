---
title: Dynamic Programming
---

## Dynamic Programming

Dynamic Programming(DP) is a programming technique for solving problems where the computations of its subproblems overlap: you write your program in a way that avoids recomputing already solved problems.
This technique, it's usually applied in conjunction with memoization which is an optimization technique where you cache previously computed results, and return the cached result when the same computation is needed again.

An example with Fibonacci's series which is defined as:

```F(N) = F(N-1) + F(N-2)```

This is the tree to find F(5):

![Fibonacci serie's tree](https://i.stack.imgur.com/59Rpw.png)

To compute F(5) it will need to compute many times the same F(i). Using recursion:

```python
def fib(n)
{
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2);
}
```

For F(5), this solution will generate the calls depicted in the image above, running in O(2^N).

Here is an optimised solution which uses DP and memoization:

```python
lookup = {1 : 1, 2 : 1} # Create a lookup-table (a map) inizialized with the first 2 Fibonacci's numbers

def fib(n)
{
    if n in lookup: # If n is already computed
        return n # Return the previous computed solution
    else 
        lookup[n] = fib(n-1) + fib(n-2) # Else, do the recursion.
    return lookup[n]
}
```
Caching computed solutions in a lookup table, and query it before go recursion will let the program have a running time of O(N).


A better way to do this is to get rid of the recursion all-together by evaluating the results in the right order:
```python
lookup = {0 : 0, 1 : 1}

def fib(n):
    for i in range(2, n + 1):
        lookup[i] = lookup[i - 1] +  lookup[i - 2]

    return lookup[n]
```
We can even use constant space and store only the necessary partial results along the way:
```python
def fib(n):
  fi_minus_2 = 0
  fi_minus_1 = 1

  for i in range(2, n + 1):
      fi = fi_minus_1 + fi_minus_2
      fi_minus_1, fi_minus_2 = fi, fi_minus_1

  return fi
```
The two solutions follow the bottom up approach; where we build solutions from bottom to top

#### More Information:

[What is dynamic programming on StackOverflow](https://stackoverflow.com/questions/1065433/what-is-dynamic-programming")
[Difference between memoization and DP on StackOverflow](https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming)
