---
title: Threads
---
## Threads

A thread is an abstraction that operating systems use to represent the CPU to programs. There is no real concept of threads in machine code or assembly languages.

Suppose you have multiple programs open - each program’s share of the CPU’s time is represented by one or more threads associated with that program. A thread for a certain program consists of some or all of that program’s compiled instructions, plus some information required for the CPU to execute these instructions.

When the operating system’s <b>scheduler</b> decides that it is Program A’s turn to run, the OS feeds (or to be more accurate, multiplexes) instructions in Program A’s thread to the CPU, which then runs these instructions.

As mentioned above, threads also hold important data such as the line number of the next instruction to execute. This lets the CPU pick up, quite literally, where it left off the last time the thread was run. This process of switching from one thread to another, along with these associated resources, is called <b>context switching</b>.

<!-- #### More Information: -->
<!-- Please add any articles you think might be helpful to read before writing the article -->


