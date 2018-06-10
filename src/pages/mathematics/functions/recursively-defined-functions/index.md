---
title: Recursively Defined Functions
---
## Recursively Defined Functions

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/functions/recursively-defined-functions/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

#### Recursive functions
##### A function that is recursive depends upon smaller instances of the same problem in order to compute itself. The function will call itself with smaller values until it arrives at an endpoint or base case.

##### The factorial function is recursive:
###### 6! = 6 * 5!
######    = 6 * 5 * 4!
######    = 6 * 5 * 4 * 3!
######    = 6 * 5 * 4 * 3 * 2!
######    = 6 * 5 * 4 * 3 * 2 * 1!
######    = 6 * 5 * 4 * 3 * 2 * 1 * 0!
######    = 6 * 5 * 4 * 3 * 2 * 1 * 1 (note that, by definition, 0! is 1)
######    = 6 * 5 * 4 * 3 * 2
######    = 6 * 5 * 4 * 6
######    = 6 * 5 * 24
######    = 6 * 120
######    = 720

#### In this way, 0! is the base case. 0! = 1, at which point there are no more factorials to compute so we can then multiply 6 * 5 * 4 * 3 * 2 * 1 to get 720.

#### Sequences can also be defined recursively. The Fibonacci Sequence is the classic example.
#### {1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..., n}
##### the base case for the fibonacci sequence is 1. To find n (the current number in the sequence, we must add the previous two numbers (n-1 and n-2). So the second number in the sequence is found by adding 1 and 0, which is 1.
##### for the third n, n = (n-1) + (n-2) = 1 + 1 = 2
##### for the fourth n, n = (n-1) + (n-2) = 2 + 1 = 3
##### for the fifth n, n = (n-1) + (n-2) = 3 + 2 = 5
##### this pattern can be followed for all integer n!

##### recursion is frequently used in programming to operate on lists, amongst other things.
#### More Information:
[wikipedia on computer science recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science))
[in-depth explanation on the stack](https://math.stackexchange.com/search?q=recursion)
[recursion wikipedia article](https://en.wikipedia.org/wiki/Recursion)
