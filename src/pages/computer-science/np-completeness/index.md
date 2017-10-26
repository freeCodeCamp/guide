---
title: Np Completeness
---
## Np Completeness
**The Very Basics** </br>
P and NP are two complexity classes, aka sets of computational problems. **P (polynomial time)** represents problems that can be solved in a reasonable amount of time (ex. multiplication, sorting), whereas **NP (non-deterministic polynomial time)** represents problems that are difficult to solve but easy to check (ex. sodoku, public-key cryptography, finding large prime numbers). P is a subset of NP.

Polynomial time means that given n inputs, the time required to solve the problem is a polynomial function and thus reasonable to compute. Non-deterministic polynomial time means that given n inputs, the **time required is exponential** in the form a*k^n for some constants a, k. Thus NP problems are very computationally expensive and difficult to solve. 

NP-complete is the intersection of NP and NP-hard. Essentially, NP-complete problems contain all the computationally difficult components of NP problems. 

<img src="http://www.geeksforgeeks.org/wp-content/uploads/NP-CompleteSet.png">

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Try googling computational complexity theory!
P vs.NP is a Millenium Prize Problem, meaning you could win a million dollars if you solve it. Good luck!


