---
title: Dining Philosophers Problem
---
## Dining Philosophers Problem

The dining philosophers problem illustrates the issues of synchronization in concurrent systems and techniques for solving them.

### Problem Statement

Five philosophers sit around a table with 5 bowls of food in front of them and 5 chopsticks. Each philosopher must alternatively think and eat.  A chopstick is either available or in use and can only be used by one philosopher at a time. A philosopher needs two chopsticks to begin eating and can pick up either the chopstick on his left or the one from his right, but cannot start eating until he has both chopsticks. When a philosopher is done eating, he puts down both chopsticks and returns to thinking. 

Design an algorithm that would allow the philosopher to take turns eating and thinking. 

### Concurrency Problems
-----------------------------------------------
Deadlock
-----------------------------------------------
Deadlock is a state in which no progress is possible. In our example, deadlock would happen if we get to a state where each philosopher has picked up his left chopstick and they never put it down and all wait for the right chopstick to become available.

-----------------------------------------------
Resource Starvation
-----------------------------------------------
Resource starvation will happen if a particular philosopher is never able to acquire both chopsticks due to timing issues. For example, assume dinner table etiquette demands that each phislopher can only hold a chopstick for 2 minutes before putting it down and must wait another 2 minutes before attempting to pick up chopsticks again. If all the philosophers show up for dinner at the same time, they each pick up the left chopstick, they all wait 2 minutes before putting it down and after another 2 minutes, they all pick up the left chopstick again. This is not deadlock, as the system can always move to a next state, but the philosohpers can never eat.


