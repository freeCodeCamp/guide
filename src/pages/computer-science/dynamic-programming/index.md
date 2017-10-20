---

title: Dynamic Programming

---

## Dynamic Programming

Dynamic Programming(DP) is a programming technique for solving problems where the computations of its subproblems overlap: you write your program in a way that avoids recomputing already solved problems.
This technique, it's usually applied in conjunction with memoization which is an optimization technique where you cache previously computed results, and return the cached result when the same computation is needed again.

Let's see an example with Fibonacci's series which is defined as:



    F(N) = F(N-1) + F(N-2)

To find F(5) we will have this tree:

![Fibonacci serie's tree](https://i.stack.imgur.com/59Rpw.png)

In order to compute F(5) we will need to compute many times the same F(i). Let's see an example which uses recursion:



```python
def fib(n)
{
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2);
}

```

For F(5), this solution will generate the calls depicted in the image above, running in O(2^N).

Let's see instead, an optimised solution which uses DP and memoization:



```python
lookup = {1 : 1, 2 : 1} # Create a lookup-table (a map) inizialized with the first 2 Fibonacci's numbers

def fib(n)
{
    if n in lookup: # If we have already computed n
        return n # Return the previous computed solution
    else 
        lookup[n] = fib(n-1) + fib(n-2) # Else, do the recursion.
    return lookup[n]
}

```

We cache computed solution in a lookup table, and query it before ending with a running time of O(N).



#### More Information:

<a href="https://stackoverflow.com/questions/1065433/what-is-dynamic-programming">What is dynamic programming on StackOverflow</a>

<a href="https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming">Difference between memoization and DP on StackOverflow</a>

