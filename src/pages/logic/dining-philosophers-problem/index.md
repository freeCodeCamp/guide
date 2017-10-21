---
title: Dining Philosophers Problem
---
## Dining Philosophers Problem

The dining philosophers problem is a classic synchronization problem which is used to evaluate situations where there is a need of allocating multiple resources to multiple processes.

<b>Problem Statement:</b>
<p>
  Consider there are five philosophers sitting around a circular dining table. The dining table has five chopsticks and a bowl of rice in the middle.
  At any instant, a philosopher is either eating or thinking. When a philosopher wants to eat, he uses two chopsticks - one from their left and one from their right. When a philosopher wants to think, he keeps down both chopsticks at their original place.
</p>
<b>Solution: </b>
<p>
From the problem statement, it is clear that a philosopher can think for an indefinite amount of time. But when a philosopher starts eating, he has to stop at some point of time. The philosopher is in an endless cycle of thinking and eating.

An array of five semaphores, stick[5], for each of the five chopsticks.
</p>
The code for each philosopher looks like:<br/>
<blockquote>
while(TRUE) {<br>
wait(stick[i]);<br>
wait(stick[(i+1) % 5]);  // mod is used because if i=5, next <br>
                    // chopstick is 1 (dining table is circular)<br>
/* eat */<br>
signal(stick[i]);<br>
signal(stick[(i+1) % 5]); <br>
/* think */<br>
}<br>
  </blockquote>
When a philosopher wants to eat the rice, he will wait for the chopstick at his left and picks up that chopstick. Then he waits for the right chopstick to be available, and then picks it too. After eating, he puts both the chopsticks down.

But if all five philosophers are hungry simultaneously, and each of them pickup one chopstick, then a deadlock situation occurs because they will be waiting for another chopstick forever. The possible solutions for this are:

A philosopher must be allowed to pick up the chopsticks only if both the left and right chopsticks are available.
Allow only four philosophers to sit at the table. That way, if all the four philosophers pick up four chopsticks, there will be one chopstick left on the table. So, one philosopher can start eating and eventually, two chopsticks will be available. In this way, deadlocks can be avoided.
