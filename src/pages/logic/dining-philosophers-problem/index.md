---
title: Dining Philosophers Problem
---
## Dining Philosophers Problem
    The dining philosophers problem is a classic synchronization problem which is used to evaluate situations where there is a need of allocating multiple resources to multiple processes by avoiding deadlock condition(Deadlocks are a set of blocked processes each holding a resource and waiting to acquire a resource held by another process).
    In the problem,there are 5 philosophers and 5 chopsticks.The philosophers have eat rice from their rice balls and each would require 2 chopsticks to eat the rice.At any instant, a philosopher is either eating or thinking. When a philosopher wants to eat, he uses two chopsticks - one from their left and one from their right. When a philosopher wants to think, he keeps down both chopsticks at their original place.When a philosopher wants to eat the rice, he will wait for the chopstick at his left and picks up that chopstick. Then he waits for the right chopstick to be available, and then picks it too. After eating, he puts both the chopsticks down.

But if all five philosophers are hungry simultaneously, and each of them pickup one chopstick, then a deadlock situation occurs because they will be waiting for another chopstick forever. The possible solutions for this are:

A philosopher must be allowed to pick up the chopsticks only if both the left and right chopsticks are available.
Allow only four philosophers to sit at the table. That way, if all the four philosophers pick up four chopsticks, there will be one chopstick left on the table. So, one philosopher can start eating and eventually, two chopsticks will be available. In this way, deadlocks can be avoided.

    


#### More Information:
You can refer- http://www.studytonight.com/operating-system/dining-philosophers-problem

