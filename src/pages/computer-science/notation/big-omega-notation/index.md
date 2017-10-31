---
title: Big Omega Notation
---
To define big-oh notation it is said f(n)=O(g(n)) if there exists some constant c such that for all large enough n, f(n)≤ c g(n). If the same holds for all c>0, then f(n)=o(g(n)), the little-oh notation. Big-oh and little-oh notation come in very handy in analyzing algorithms because you can ignore implementation issues that could cost a constant factor. 
To describe lower bounds we use the big-omega notation f(n)=Ω(g(n)) usually defined by saying for some constant c>0 and all large enough n, f(n)≥c g(n). This has a nice symmetry property, f(n)=O(g(n)) iff g(n)=Ω(f(n)). Unfortunately it does not correspond to how we actually prove lower bounds. 

For example consider the following algorithm to solve perfect matching: If the number of vertices is odd then output "No Perfect Matching" otherwise try all possible matchings. 
The algorithm requires exponential time but in fact you cannot prove a Ω(n2) lower bound using the usual definition of Ω since the algorithm runs in linear time for n odd. Instead define f(n)=Ω(g(n)) by saying for some constant c>0, f(n)≥ c g(n) for infinitely many n. This gives a nice correspondence between upper and lower bounds: f(n)=Ω(g(n)) iff f(n) is not o(g(n)). 


