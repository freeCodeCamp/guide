---
title: Np Completeness
---
## Np Completeness

We have been writing about efficient algorithms to solve complex problems, like shortest path, Euler graph, minimum spanning tree, etc. Those were all success stories of algorithm designers.Let's discuss some of the  failure stories of computer science.

Can all computational problems be solved by a computer? There are computational problems that can not be solved by algorithms even with unlimited time. For example Turing Halting problem (Given a program and an input, whether the program will eventually halt when run with that input, or will run forever). Alan Turing proved that general algorithm to solve the halting problem for all possible program-input pairs cannot exist. A key part of the proof is, Turing machine was used as a mathematical definition of a computer and program (Source Halting Problem).

Status of NP Complete problems is another failure story, NP complete problems are problems whose status is unknown. No polynomial time algorithm has yet been discovered for any NP complete problem, nor has anybody yet been able to prove that no polynomial-time algorithm exist for any of them. The interesting part is, if any one of the NP complete problems can be solved in polynomial time, then all of them can be solved.

![all sets of difficulty](http://www.geeksforgeeks.org/wp-content/uploads/NP-CompleteSet.png)

What are NP, P, NP-complete and NP-Hard problems?

What is NP?

NP is the set of all decision problems (questions with a yes-or-no answer) for which the 'yes'-answers can be verified in polynomial time (Big-O(nk) where n is the problem size, and k is a constant) by a deterministic Turing machine.

What is P?

P is the set of all decision problems which can be solved in polynomial time by a deterministic Turing machine. Since they can be solved in polynomial time, they can also be verified in polynomial time. Therefore P is a subset of NP.

What is NP-Complete?

A problem x that is in NP is also in NP-Complete if and only if every other problem in NP can be quickly (ie. in polynomial time) transformed into x.

In other words:

x is in NP, and
Every problem in NP is reducible to x
So, what makes NP-Complete so interesting is that if any one of the NP-Complete problems was to be solved quickly, then all NP problems can be solved quickly.

What is NP-Hard?

NP-Hard are problems that are at least as hard as the hardest problems in NP. Note that NP-Complete problems are also NP-hard. However not all NP-hard problems are NP (or even a decision problem), despite having NP as a prefix. That is the NP in NP-hard does not mean non-deterministic polynomial time. Yes, this is confusing, but its usage is entrenched and unlikely to change.

NP-complete problems are the hardest problems in NP set.  A decision problem L is NP-complete if:
1) L is in NP (Any given solution for NP-complete problems can be verified quickly, but there is no efficient known solution).
2) Every problem in NP is reducible to L in polynomial time (Reduction is defined below).

A problem is NP-Hard if it follows property 2 mentioned above, doesn’t need to follow property 1. Therefore, NP-Complete set is also a subset of NP-Hard set.


 
