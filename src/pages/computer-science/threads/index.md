---
title: Threads
---
## Threads

**Introduction**

 - A thread is a basic unit of CPU utilization. It comprises a thread
   ID, a program counter, a register set, and a stack.
 - It shares with other threads belonging to the same process - its code
   section, data section, and other operating-system resources, such as open files and signals.
 - To go one step further, imagine a main program (a.out) that contains
   a number of procedures. Then imagine all of these procedures being able to be scheduled to run simultaneously and/or independently by
the operating system. That would describe a "multi-threaded" program.

![enter image description here](https://computing.llnl.gov/tutorials/pthreads/images/thread.gif)

**Why threads?**

 - Light-weight: Managing threads requires fewer system resources than
   managing processes.
 - Efficient communication
 - Asynchronous event handling
 - Priority/real-time scheduling

**Pthreads API**
The subroutines of the Pthreads API n be informally grouped into:

Thread management: Routines that work directly on threads - creating, detaching, joining, etc.

Mutexes: Routines that deal with synchronization, called a "mutex", which is an abbreviation for "mutual exclusion". Mutex functions provide for creating, destroying, locking and unlocking mutexes.

Condition variables: Routines that address communications between threads that share a mutex. Based upon programmer specified conditions.

Synchronization: Routines that manage read/write locks and barriers.


#### More Information:
- [Wikipedia](https://en.wikipedia.org/wiki/Thread_%28computing%29) article on threads.
- [POSIX threads](https://computing.llnl.gov/tutorials/pthreads/) advanced resource with a good set of examples.
- [Youtube](https://www.youtube.com/watch?v=O3EyzlZxx3g) Udacity channel, differentiates between process and threads.
- [threads reference](https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html) multi-threading, OS examples and more.
