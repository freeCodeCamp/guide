---
title: Garbage Collection
---
## Garbage Collection

Garbage collection is the process in which programs try to free up memory space that is no longer used by variables, objects, and such.  Garbage collection is implemented differently for every language.  Most high-level programming languages have some sort of garbage collection built it.  Low-level programming languages may add garbage collection through libraries.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
#### Advantages
The programmer doesn't have to deal with memory deallocation. This prevents <a href="https://en.wikipedia.org/wiki/Memory_leak">memory leaks</a> and certain bugs such as <a href="https://en.wikipedia.org/wiki/Dangling_pointer">dangling pointers</a>.

#### Disadvantages
Garbage collection consumes resources in deciding which memory can be freed, which impacts performance. It can also result in stalls in program execution to shift/free memory and is usually incompatible with manual resource management.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Please visit the <a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">Garbage Collection (computer science)</a> Wikipedia page for more information.
