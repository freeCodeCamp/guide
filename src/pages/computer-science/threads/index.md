---
title: Threads
---
## Threads

<!--This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/threads/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>. -->

<!-- <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>. -->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

A thread is the basic unit of CPU utilization. When you run a program, it is executed as it's runtime entity, called a process. A process is said to have a single thread of execution, if it can do only one task at a time. Similarly a process with multiple threads of execution, can execute multiple tasks concurrently. 

A process during execution occupies some space in the main memory called as the process memory map. It has several sections called text, data, bss, heap, stack, etc (for more details check [this](http://www.geeksforgeeks.org/memory-layout-of-c-program/)). As said earlier,an ordinary process has only a single thread of execution. Now, when you create a thread within that process, the registers and the stack portion are divided among the threads, so that each thread can execute independently.

![alt text](http://www.cs.miami.edu/home/visser/Courses/CSC322-09S/Content/UNIXProgramming/Threads.JPG)

Concurrent multitasking could have been achieved by forking multiple processes, but threads provide the following advantages:

1. **Responsiveness**: Multithreaded programs provide responsiveness to interactive processes. For example, the autocorrect       feature of MS Word or GBoard run as separate threads to correct any errors. 
2. **Resource Sharing**: Threads share common resources like code and thus helps in preventing duplication.
3. **Economy**: Threads result in avoiding expensive overheads of forking and context switch among processes.
4. **Utilization of multiprocessors**: Threads help in maximum utilization of the multiprocessor architecture, by running each thread on a processor and hence achieving true parallelism.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
http://www.personal.kent.edu/~rmuhamma/OpSystems/Myos/threads.htm

