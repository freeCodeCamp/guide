---
title: Brute Force Algorithms
---
## Brute Force Algorithms

Brute force algorithms try every possible candidates for the solution and check whether each candidate satisfies the problem's statement.
The basic structure is pretty simple.

1. List out all the possible candidates
2. For each, check if it solves the problem
3. If it does, then add to solutions
4. Repeat till all candidates are exhausted

Now an example:

You have been given a number N (say 15). Find out all the positive divisors of N.

1. List out candidates     -  All natural numbers from 1 to N
2. Check one by one        -  Divide N by a candidate and check the remainder
3. If it satisfies         -  If remainder is 0, then add to list of divisors
4. Repeat for all          -  Check all from 1 to N


