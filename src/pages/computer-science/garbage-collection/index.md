---
title: Garbage Collection
---
## Garbage Collection

Garbage collection is the process in which programs try to free up memory space that is no longer used by variables, objects, and such.  Garbage collection is implemented differently for every language. Most high-level programming languages have some sort of garbage collection built in. Low-level programming languages may add garbage collection through libraries.

Garbage collection is a tool that saves time for the programmer, for example it replaces the need for functions such as malloc() and free() which are found in C. It can also help in preventing memory leaks.

The downside of garbage collection is that it has a negative impact on performance. The program has to regularly run though the program, checking object references and cleaning out memory - this takes up resources and often requires the program to pause.
 
If an object has no references (is no longer reachable) then it is eligible for garbage collection. For example in the Java code below, the Thing object originally referenced by 'thing1' has its one and only reference redirected to another object on the heap - it is then unreachable and will have its memory unallocated by the garbage collector.

```java
class Useless {
  public static void main (String[] args) {
  Thing thing1 = new Thing();
  Thing thing2 = new Thing();
  thing2 = thing1; // direct thing2's reference towards thing1
                   // no references access thing2
} }
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Please visit the <a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">Garbage Collection (computer science)</a> Wikipedia page for more information.
