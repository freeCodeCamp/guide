---
title: Threads
---
## Threads

Threads are a way in programming to perform multiple tasks at the same time.  

There may be any number of child threads within the context of a process. Threads can increase the speed of execution of a program, by increasing the percentage of CPU used for the task. Note that drastically increasing the number of threads in a program can be highly CPU intensive, and if 100% of a CPU is being used, then threads will have no effect on the speed of execution.

**Multithreading** is a programming concept where a program spawns multiple threads during execution so as to perform tasks faster.

Here is a simple multithreading example in python which prints the numbers 1 through 10, by spawning a separate thread for each print statement.

````
import threading

def print_number(number):
    print(number)
    
if __name__ == "__main__":
    for i in range(1, 11):
        threading.Thread(target=print_number, args=(i,)).start()
````

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Threads (Wikipedia)](https://en.wikipedia.org/wiki/Thread_(computing))
- [Understanding Multithreading](http://www.nakov.com/inetjava/lectures/part-1-sockets/InetJava-1.3-Multithreading.html)
