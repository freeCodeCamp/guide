---
title: Garbage Collection
---
## Garbage Collection

In programming, garbage collection is the process of collecting memory wasteages. It means that, ic c# you wont need to release the memory manually once the object scope exceeded. 

In C#, memory allocation of objects are happened in managed heap. which takes care by CLR (common language runtime). Whenever a source code comes under CLR is called managed code. memory allocation for the heap is done through win32 dll in OS as like in the C. But, In C objects are placed in memory where ever the free space suited the size of memory. But, in C# memory allocation for heap is happening in linear manner.
  
Whenever new object cleartion is happening heap pointer just move a place head to allocate the place which will make the routine faster compare with C programming. 

C# heap has three generations called generation 0, 1, 2. Generation 0 get filled first Garbage collector run when the Generation 0 get filled. newly created objects are placed in Generation 0. While performing garbage collection all the unwanted objects are destroyed, memory gets freed and compacted. GC takes care of pointers once GC happens. 
  
Generations 1 and 2 has object which has the longer life time. GC on generations 1 and 2 will not happend until the generations 0 garbage collector dint get sufficient memory to run the program. 
  
Its not advisable to invoke the GC programmatically. It's good to let it happend on its own. GC get call whenever the generation 0 gets filled. 


