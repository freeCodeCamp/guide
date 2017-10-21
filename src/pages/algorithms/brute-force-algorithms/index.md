
## Brute Force Algorithm

  1.List all possible Hamilton circuits (leaving out the exact reversals, if you wish)

  2.Find the weight of each

  3.Choose (the) one with the smallest weight.


Pluses: It always works (given enough time & care).

Minuses: It can only be used for relatively small graphs. For a computer doing 10,000 circuits/sec, it would take about 18 seconds to handle 10 vertices, 50 days to handle 15 vertices, 2 years for 16 vertices, 193,000 years for 20 vertices.

Bottom line: Unfortunately, the Brute Force Algorithm is the ONLY method known that is guaranteed to produce an optimal solution.

Mathematicians have not been able to prove that another such method exists nor have they been able to prove that one doesn’t exist.

This is one of the most important and famous unsolved problems in mathematics. If you can find an efficient solution to the TSP, you will be rich and famous!!

Although we do not have an efficient algorithm for solving TSPs, we do have several algorithms that produce results that may not be optimal; in this respect, we are willing to give up our requirement for an optimal solution in the interest of time and settle for a "good" solution which may not be optimal. We call this class of algorithms approximate algorithms. The remaining algorithms are approximate algorithms.
