---
title: Np Completeness
---
## Np Completeness

NP-Complete is a property of certain types of problems. If a problem is NP-Complete, it means that there is no efficient (polynomial) algorithm to find a solution to it quickly. However, if a solution is given to us, we can quickly (in polynomial time) verify that it is correct.

To be more concrete, let us examine a known NP-Complete problem - the subset sum problem. Say we have a set of integers {−7, −3, −2, 5, 8}. We want to find a subset of these integers whose elements sum up to 0. How can we do that?

One way would be to simply enumerate all possible subsets and check if their elements sum up to 0. This would be exponentially complex.

And indeed, there is no better algorithm known, which improves on the exponential time bound. That is why it is classifies as an NP-Complete problem.

There are many such known problems apart from the subset sum problem which are known to be NP-Complete. If an efficient algorithm for one is found, it implies that we can design an efficient algorithm for all problems which are NP-Complete.

If you have a problem that can be proved to be NP-complete, you should stop trying to find more efficient algorithms for it and instead use heuristics to solve the problem for most test cases, or solve an approximate version of the problem. Or maybe examine the problem you're solving to see if it can't be simplified to something that isn't NP-Complete.


##History
 
The concept of NP-completeness was introduced in 1971 (see Cook–Levin theorem), though the term NP-complete was introduced later. At 1971 STOC conference, there was a fierce debate among the computer scientists about whether NP-complete problems could be solved in polynomial time on a deterministic Turing machine. John Hopcroft brought everyone at the conference to a consensus that the question of whether NP-complete problems are solvable in polynomial time should be put off to be solved at some later date, since nobody had any formal proofs for their claims one way or the other. This is known as the question of whether P=NP.

Nobody has yet been able to determine conclusively whether NP-complete problems are in fact solvable in polynomial time, making this one of the great unsolved problems of mathematics. The Clay Mathematics Institute is offering a US $1 million reward to anyone who has a formal proof that P=NP or that P≠NP.

The Cook–Levin theorem states that the Boolean satisfiability problem is NP-complete (a simpler, but still highly technical proof of this is available). In 1972, Richard Karp proved that several other problems were also NP-complete (see Karp's 21 NP-complete problems); thus there is a class of NP-complete problems (besides the Boolean satisfiability problem). Since the original results, thousands of other problems have been shown to be NP-complete by reductions from other problems previously shown to be NP-complete; many of these problems are collected in Garey and Johnson's 1979 book Computers and Intractability: A Guide to the Theory of NP-Completeness.[3] For more details refer to Introduction to the Design and Analysis of Algorithms by Anany Levitin.

#### More Information:
https://www.ics.uci.edu/~eppstein/161/960312.html
https://stackoverflow.com/questions/210829/what-is-an-np-complete-in-computer-science


