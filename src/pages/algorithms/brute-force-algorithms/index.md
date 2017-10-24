## Brute Force Algorithms

Consider the solution to the following problems:
1. Find the heaviest apple from a crate of apples.
2. Guess the 3 digit code of a mechanical lock.
3. Insert a USB plug into a connector with eyes closed.

In all the problems, the brute force algorithm is applied to find the solution. The brute force algorithm is also called 'generate and test' because it is implemented by generating a list of possible solutions and testing whether each solution is correct. Brute force solutions are easy to implement but, the time to find the solution increases as the number of possible solutions increases.

The pseudo-code below shows how the brute force algorithm can be implemented:

```
S = Set of all possible solutions

for each value V in S
  if (V satisfies solution) {
    break
  }
```

# Example

In the code snippet below, the program guesses the value of a randomly generated integer `n` such that `0 <= n <= 100` using the brute force algorithm.

```
from random import randint

n = randint(0, 100)

for i in range(0, 101):
    if i == n:
        print str(i) + " = " + str(n)
        break
    else:
        print str(i) + " != " + str(n)
```

#### More Information:
* https://en.wikipedia.org/wiki/Brute-force_search
