---
title: Itertools
---

Itertools is a python module of functions that return generators, objects that only function when iterated over. 
Some examples of itertool functions include but not limited to: chain(), imap(), product(), and compress().

```py
import itertools
a = itertools.chain([1, 2], [3, 4])

# Output
# [1, 2, 3, 4]
```

Combinatoric iterators:

Iterator	                                           Arguments	                                 Results
product()	                                            p, q, … [repeat=1]	                       cartesian product, equivalent to a nested                                                                                                  for-loop
permutations()	                                      p[, r]	                                   r-length tuples, all possible orderings,                                                                                                  no repeated elements
combinations()	                                      p, r	                                     r-length tuples, in sorted order, no                                                                                                      repeated elements
combinations_with_replacement()	                      p, r	                                     r-length tuples, in sorted order, with                                                                                                    repeated elements
product('ABCD', repeat=2)	 	                                                                     AA AB AC AD BA BB BC BD CA CB CC CD DA DB                                                                                                  DC DD
permutations('ABCD', 2)	 	                                                                       AB AC AD BA BC BD CA CB CD DA DB DC

combinations('ABCD', 2)	 	                                                                       AB AC AD BC BD CD

combinations_with_replacement('ABCD', 2)	 	                                                     AA AB AC AD BB BC BD CC CD DD


Source:https://docs.python.org/3/library/itertools.html
