---
title: Garbage Collection
---
## Garbage Collection

Garbage collection is the process in which programs try to free up memory space that is no longer used by variables, objects, and such.  Garbage collection is implemented differently for every language.  Most high-level programming languages have some sort of garbage collection built it.  Low-level programming languages may add garbage collection through libraries.

## IN JAVA 
1. When the gc does garbage collection the first time all objects are young. Those that survive are moved to old age objects collection which are not visited frequently by the gc. The Permanent generation contains metadata required by the JVM to  describe the classes and methods used in the application. The permanent  generation is populated by the JVM at runtime based on classes in use  by the application. In addition, Java SE library classes and methods may  be stored here.


2. Mark and sweep algorithm. The GC first tries to find all objects that are accessible by the application and MARKS them as valid. After marking all it then frees (SWEEP) the remaining memory not referenced by any objects.
7.3k Views · 39 Upvotes
Upvote39
Downvote
Share
 
RecommendedAll
Prateek Jain

Khaled El-Tahan
Khaled El-Tahan, Studying computer and systems engineering
Answered May 21, 2015
Using mark-sweep algorithm , we associate a “mark” bit with each object that identifies if that object is live or not. When we determine, at some point, that garbage collection is needed, we suspend all other running threads and clear the mark bits of all the objects currently allocated in the memory heap. We then trace through the call stack of the currently running program and we mark all the (root) objects in this stack as “live.” We must then determine all the other live objects—the ones that are reachable from the root objects. To do this efficiently, we can use the directed-graph version of the depth-first search traversal .In this case, each object in the memory heap is viewed as a vertex in a directed graph, and the reference from one object to another is viewed as a directed edge. By performing a directed DFS from each root object, we can correctly identify and mark each live object. This process is known as the “mark” phase. Once this process has completed, we then scan through the memory heap and reclaim any space that is being used for an object that has not been marked. This scanning and reclamation process is known as the “sweep” phase, and when it completes, we resume running the suspended threads. Thus, the mark-sweep garbage collection algorithm will reclaim unused space in time proportional to the number of live objects and their references plus the size of the memory heap.
We also face another problem , that is performing DFS needs extra space "stack space" , we instead use "in place DFS" algorithm , The main idea for performing DFS in-place is to simulate the recursion stack using the edges of the graph (which, in the case of garbage collection, corresponds to object references). When we traverse an edge from a visited vertex v to a new vertex w, we change the edge (v, w) stored in v’s adjacency list to point back to v’s parent in the DFS tree. When we return back to v (simulating the return from the “recursive” call at w), we can now switch the edge we modified to point back to w. Of course, we need to have some way of identifying which edge we need to change back. One possibility is to number the references going out of v as 1, 2, and so on, and store, in addition to the mark bit (which we are using for the “visited” tag in our DFS), a count identifier that tells us which edges we have modified.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Please visit the <a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">Garbage Collection (computer science)</a> Wikipedia page for more information.
