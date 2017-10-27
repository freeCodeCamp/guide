---
title: Dining Philosophers Problem
---
## Dining Philosophers Problem

Dining Philosophers is a problem commonly used in computer science to explain synchronization issues in concurrent algorithm design and how to go about fixing them. 

## The Problem
Dining philosophers begins with 5 silent philosophers sitting at a round table with a plate of spaghetti in front of each one. Between each plate is a fork. Each philosopher must alternate bewteen eating and thinking. To eat, a philosopher must hold both the left and right fork. The forks cannot be held by more than one philosopher at a time. After a philosopher has finished eating, he must put both forks down and another philosopher can pick them up. A philosopher can pick up either the left or right fork but cannot start eating until they have both the left and right fork. An infinite supply and demand of spaghetti is available so running out of spaghetti or getting full is not an issue. This problem is designed to come up with a solution so that no philosopher will starve and they can all alternate between eating and thinking. 

Dining Philosophers creates the issue of having to avoid a deadlock. 

Consider the following proposal<sup>2</sup>:

```
think until the left fork is available; when it is, pick it up;
think until the right fork is available; when it is, pick it up;
when both forks are held, eat for a fixed amount of time;
then, put the right fork down;
then, put the left fork down;
repeat from the beginning.
```
This creates a deadlock in which the philosophers will wait for an eternity for the other philosopher to release a fork. 

## One Possible Solution

One solution, the Resource hierarchy solution, to this problem assigns a partial order to the forks and "establishes the convention that all resources will be requested in order, and that no two resources unrelated by order will ever be used by a single unit of work at the same time." <sup>3</sup> Each fork will be assigned a number (1 through 5) and each philosopher will pick the lower numbered fork on their left or right first, followed by the higher numbered fork. Which one they choose to put down first does not matter. If each philosopher picks up the lower numbered fork on their left or right, only the highest numbered fork will remain. Only one philosopher will be able to pick up the highest numbered fork, so they will be able to eat while the other philosophers think. 

While this solution does avoid a deadlock, it is not the only one. The Arbitrator and Chandy/Misra are also solutions that solve this problem in a different way. 

#### More Information:
1,2,3. https://en.wikipedia.org/wiki/Dining_philosophers_problem


