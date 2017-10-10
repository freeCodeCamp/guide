---
title: Dynamic Programming
---
## Dynamic Programming

Dynamic Programming is a method of programming where you divide a complex problem into multiple subproblems and store the solution of each of those subproblems. When the same subproblem occurs again, instead of recomputing it, we lookup its solution. Thereby saving on the computation time at the modest expense of storage. This  property of DP is called Overlapping Subproblems.

Here is an example.

```c++
int fib(int n)
{

    if ( n <= 1 )

    return n;

    return fib(n-1) + fib(n-2);

}
```

Above is a simple recursive solution where we are computing fib(2) many times.

And below is the optimised solution (using DP


```c++
int lookup[n+1];

for(int i =0; i<=n; i++)
{    
    lookup[i] = -1;
}

int fib(int n)
{
    if (lookup[n] == -1)
    {
        if (n <= 1)
        lookup[n] = n;
        else
        lookup[n] = fib(n-1) + fib(n-2);
    }
    return lookup[n];
}
```

#### More Information:
<a href='http://www.geeksforgeeks.org/dynamic-programming-set-1/' target='_blank' rel='nofollow'>Geeks for Geeks Article</a>
