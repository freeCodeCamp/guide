---
title: Logic
---
## Logic

In this section, we'll have guides to a wide variety of logical puzzles that are important to math and programming.

teaches(john, hardware, T) :- 1990 ≤ T, T < 1999.
teaches(john, software, T) :- 1999 ≤ T, T < 2005.
teaches(john, logic, T) :- 2005 ≤ T, T ≤ 2012.
rank(john, instructor, T) :- 1990 ≤ T, T < 2010.
rank(john, professor, T) :- 2010 ≤ T, T < 2014.
