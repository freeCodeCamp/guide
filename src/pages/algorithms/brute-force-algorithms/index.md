---
title: Brute Force Algorithms
---
## Brute Force Algorithms

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Algorithms in general are supposed to find the solution to a problem. This process can be viewed as finding the correct solution among all possible answers. Let's say the problem is to find the greatest common divisor of two numbers. This problem can be interpreted as "among all numbers, find the largest number that is the divisor of both inputs".
So usually when designing an algorithm we have a search space (in our example all numbers) and the algorithm we design is supposed to find the correct answer (in some cases one of the correct answers) in that search space.
The approach of brute force algorithms is to search the entire search space until the algorithm finds the correct solution. It might not be an efficient solution for our example, but a brute force algorithms that solves our problem would go through all numbers (divisors are defined for natural numbers [positive integers], so we only consider them), until we find the largest common divisor (for the purpose of simplicity I don't explain the order to search for numbers and it is not important in the context of brute force algorithms as I mentioned before that solving this problem using a brute force algorithm is not efficient).

So now that we know the approach of these algorithms, let's see where can we use them.
- Since brute force algorithms search the entire search space, problems with large search spaces are not good candidates. For example, searching in all subsets of a huge set. As you might know, the number of subsets of a set of size N is 2^N, which is exponentially larger than the size of the set.
- Also, sometimes the search space is not properly ordered. In that case searching does not make much sense, as some parts of the space might not get searched ever. As an example, consider the search space to be all real numbers (irrational numbers cannot be ordered).

A famous example of a brute force algorithm is the algorithm that solves the 8-queen puzzle. The problem is to find a way to place 8 queens on a chess board, so that no pair  are attacking each other. The search space in this problem is all the possible chess boards that have 8 queens on them. Since we know that if two queens are in the same row or the same column, they attack each other, we can ignore those from our search space. Then a simple brute force algorithm starts by placing the first queen in the first row of the first column, then placing the second queen on the first available row of the second column, the third queen on the first available row of the third column, and so on. When all 8 queens are placed, the algorithm checks for the validity of this setting. If it's not a valid solution, then it moves the queens (searching permutations of <1, 2, 3, 4, 5, 6, 7, 8>).
 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


