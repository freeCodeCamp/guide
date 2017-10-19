---
title: Garbage Collection
---
## Garbage Collection

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/garbage-collection/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

In computer science, garbage collection (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program. Garbage collection was invented by John McCarthy around 1959 to simplify manual memory management in Lisp.

Garbage collection is often portrayed as the opposite of manual memory management, which requires the programmer to specify which objects to deallocate and return to the memory system. However, many systems use a combination of approaches, including other techniques such as stack allocation and region inference. Like other memory management techniques, garbage collection may take a significant proportion of total processing time in a program and, as a result, can have significant influence on performance. With good implementations, enough memory, and depending on application, garbage collection can be faster than manual memory management, while the opposite can also be true and has often been the case in the past with sub-optimal GC algorithms.

Resources other than memory, such as network sockets, database handles, user interaction windows, and file and device descriptors, are not typically handled by garbage collection. Methods used to manage such resources, particularly destructors, may suffice to manage memory as well, leaving no need for GC. Some GC systems allow such other resources to be associated with a region of memory that, when collected, causes the other resource to be reclaimed; this is called finalization. Finalization may introduce complications limiting its usability, such as intolerable latency between disuse and reclaim of especially limited resources, or a lack of control over which thread performs the work of reclaiming.

The basic principles of garbage collection are to find data objects in a program that cannot be accessed in the future, and to reclaim the resources used by those objects.

Many programming languages require garbage collection, either as part of the language specification (for example, Java, C#, D,[3] Go and most scripting languages) or effectively for practical implementation (for example, formal languages like lambda calculus); these are said to be garbage collected languages. Other languages were designed for use with manual memory management, but have garbage-collected implementations available (for example, C and C++). Some languages, like Ada, Modula-3, and C++/CLI, allow both garbage collection and manual memory management to co-exist in the same application by using separate heaps for collected and manually managed objects; others, like D, are garbage-collected but allow the user to manually delete objects and also entirely disable garbage collection when speed is required.

While integrating garbage collection into the language's compiler and runtime system enables a much wider choice of methods, post-hoc GC systems exist, such as ARC, including some that do not require recompilation. (Post-hoc GC is sometimes distinguished as litter collection.) The garbage collector will almost always be closely integrated with the memory allocator.

### Advantages
Garbage collection frees the programmer from manually dealing with memory deallocation. As a result, certain categories of bugs are eliminated or substantially reduced:

Dangling pointer bugs, which occur when a piece of memory is freed while there are still pointers to it, and one of those pointers is dereferenced. By then the memory may have been reassigned to another use, with unpredictable results.
Double free bugs, which occur when the program tries to free a region of memory that has already been freed, and perhaps already been allocated again.
Certain kinds of memory leaks, in which a program fails to free memory occupied by objects that have become unreachable, which can lead to memory exhaustion. (Garbage collection typically does not deal with the unbounded accumulation of data that is reachable, but that will actually not be used by the program.)
Efficient implementations of persistent data structures
Some of the bugs addressed by garbage collection can have security implications.

### Disadvantages
Typically, garbage collection has certain disadvantages, including consuming additional resources, performance impacts, possible stalls in program execution, and incompatibility with manual resource management.

Garbage collection consumes computing resources in deciding which memory to free, even though the programmer may have already known this information. The penalty for the convenience of not annotating object lifetime manually in the source code is overhead, which can lead to decreased or uneven performance.[4] A peer-reviewed paper came to the conclusion that GC needs five times the memory to compensate for this overhead and to perform as fast as explicit memory management.[5] Interaction with memory hierarchy effects can make this overhead intolerable in circumstances that are hard to predict or to detect in routine testing. The impact on performance was also given by Apple as a reason for not adopting garbage collection in iOS despite being the most desired feature.[6]

The moment when the garbage is actually collected can be unpredictable, resulting in stalls (pauses to shift/free memory) scattered throughout a session. Unpredictable stalls can be unacceptable in real-time environments, in transaction processing, or in interactive programs. Incremental, concurrent, and real-time garbage collectors address these problems, with varying trade-offs.

The modern GC implementations try to minimize blocking "stop-the-world" stalls by doing as much work as possible on the background (i.e. on a separate thread), for example marking unreachable garbage instances while the application process continues to run. In spite of these advancements, for example in .NET CLR paradigm it is still very difficult to maintain large heaps (millions of objects) with resident objects that get promoted to older generations without incurring noticeable delays (sometimes a few seconds).

Non-deterministic GC is incompatible with RAII based management of non-GCed resources[citation needed]. As a result, the need for explicit manual resource management (release/close) for non-GCed resources becomes transitive to composition. That is: in a non-deterministic GC system, if a resource or a resource-like object requires manual resource management (release/close), and this object is used as "part of" another object, then the composed object will also become a resource-like object that itself requires manual resource management (release/close).
[Source](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))
