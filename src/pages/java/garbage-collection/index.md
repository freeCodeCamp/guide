---
title: Garbage Collection
---
# Garbage Collection
  C++ is an excellent language with lots of features. But, there is a problem that C++ developers have been facing for a long time. The problem is memory leaking or similar problems. 
  
  This problem arises when there are too many objects created and the developer loses track of them. The resulting objects stay "alive" and continue hogging memory, making the program crash or something worse. 
  
  Java solves this problem with ease and makes it really simple to create and maintain objects. The question is that Java lets these objects live and the developer does not have to worry about the clean up process. Java takes care of that. 
  
  The main question that arises is that, if Java keeps the objects lying around, then how *does* it take care of leaking memory? How does it solve the problem of excessive memory usage by objects that are no longer needed? This is where the magic happens. Java has something called a `garbage collector`.
  
  It allows developers to create new objects without worrying explicitly about memory allocation and deallocation, because the garbage collector automatically reclaims memory for reuse. This enables faster development with less boilerplate code, while eliminating memory leaks and other memory-related problems. Java garbage collection seems to work too well, creating and removing too many objects. Most memory-management issues are solved, but often at the cost of creating serious performance problems. Making garbage collection adaptable to all kinds of situations has led to a complex and hard-to-optimize system. Many people think garbage collection collects and discards dead objects. In reality, Java garbage collection is doing the opposite! Live objects are tracked and everything else designated garbage. As you’ll see, this fundamental misunderstanding can lead to many performance problems.
