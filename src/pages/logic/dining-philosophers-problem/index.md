---
title: Dining Philosophers Problem
---
## Dining Philosophers Problem

The dining philosophers problem is a classic example used to illustrate issues with concurrency.

Here is a basic description of the problem: 
5 philosophers sit at a round table for dinner (in silence, the philosophers are deep in thought), with one fork placed between each pair (5 total). 

To eat, a philosopher requires both a left and a right fork. Each fork can only be held by one philosopher at a time. A philosopher can decide to take the fork on their left or the fork on their right first. This means that only some of the philosophers can eat at once, since there are not enough forks for all 5 to eat at the same time. 

Given that the philosophers can't coordinate, it's possible that each may decide to take the fork on their right (or left). In this case, all 5 would wait for a second fork. This situation is often referred to as "deadlock."


