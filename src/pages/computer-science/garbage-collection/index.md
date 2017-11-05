---
title: Garbage Collection
---
## Garbage Collection

####What is Garbage Collection?

In general layman term, Garbage collection (GC) is nothing but collecting or gaining the memory back which has been allocated to the objects, which is not in use at the moment in any part of our program. A brief description as below.

Garbage collection is the process in which programs try to free up memory space that is no longer used by objects, and such.  Garbage collection is implemented differently for every language.  Most high-level programming languages have some sort of garbage collection built it.  Low-level programming languages may add garbage collection through libraries.

As said above, every programming language has their own way of GC. In C programming, developers need to take care of memory allocation and deallocation using malloc() and dealloc() functions. But, in case of C# developers no need to take care of GC and it's not recommended as well.    
 
 #### How memory allocation happening?
 In C#, memory allocation of objects are happened in managed heap. which takes care by CLR (common language runtime). Memory allocation for the heap is done through win32 dll in OS as like in the C. But, In C objects are placed in memory where ever the free space suits the size of object. And, the memory mapping is woks based on Linkedlist concepts. In C#, memory allocation for heap is happening in linear manner. like one after another. 
 
Whenever a new object is being created. A memory is allocated in the heap and the pointer moved to next memory address. Memory allocation in C# is faster than the C. Since, in C the memory need to search and allocate for the object. so it will take a bit higher time than C#.
 
 #### Generations in C# GC?
In .net programming, heap has three generations called generation 0, 1, 2. Generation 0 get filled first whenever new object is create.  Garbage collector run when the Generation 0 get filled. newly created objects are placed in Generation 0. While performing garbage collection all the unwanted objects are destroyed, memory gets freed and compacted. GC takes care of pointing the pointers of freed memory once GC happens. 

Generations 1 and 2 has object which has the longer life time. GC on generations 1 and 2 will not happen until the generations 0 has sufficient memory to allocate.

Its not advisable to invoke the GC programmatically. It's good to let it happend on its own. GC get call whenever the generation 0 gets filled. GC will not impact the performance of your program. It;s was
