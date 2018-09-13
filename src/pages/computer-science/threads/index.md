---
title: Threads
---
## Threads
A thread is a lightweight process. See What is the difference between a process and a thread? and How does a thread differ from a traditional process? for more detail.

Processes and threads are similar in that they both have "separate paths of execution" from other processes or threads, meaning that the OS or language has implemented mechanisms to retain state and current/next instruction to execute. When a process or thread is allowed to execute that state is restored and things pick up where they left off.

Processes usually have an entirely separate memory space while threads often do not. Processes are usually managed by the OS, and with some exceptions, threads are usually managed by the execution environment of the language they are written in.

A sequence of program instructions given to the operating system to execute. It is the smallest synchronous sequence that can be executed. Being synchronous, instructions in a thread are linear and execute one after another. If a program has multiple threads, the program as a whole can be asynchronous in that these threads are executing their own instructions independently of each other (simultaneously).

A thread is an abstraction that operating systems use to represent the CPU to programs. There is no real concept of threads in machine code or assembly languages.

A common distinction one should make is the difference between threads and processes. A thread is a child of a process so to speak. A process may contain many threads.
  
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Multithreaded_process.svg/440px-Multithreaded_process.svg.png "Threads inside a Process graph")

Suppose you have multiple programs open - each program’s share of the CPU’s time is represented by one or more threads associated with that program. A thread for a certain program consists of some or all of that program’s compiled instructions, plus some information required for the CPU to execute these instructions.

As mentioned above, threads also hold important data such as the line number of the next instruction to execute. This lets the CPU pick up, quite literally, where it left off the last time the thread was run. This process of switching from one thread to another, along with these associated resources, is called <b>context switching</b>.

When the operating system’s <b>scheduler</b> decides that it is Program A’s turn to run, the OS feeds (or to be more accurate, multiplexes) instructions in Program A’s thread to the CPU, which then runs these instructions.

#### More Information:
[Wikipedia - Threads](https://en.wikipedia.org/wiki/Thread_(computing))

