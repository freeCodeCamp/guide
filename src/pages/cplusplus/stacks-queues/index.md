---
title: Stacks & Queues C++
---

# Stacks
  * Stacks are the Data structure which works on the principle of LIFO(Last In First Out). i.e.
  the element which is inserted at last will be poped out first.
  
  * C++ has inbuilt stack data structre where developer need not to worry to implement it from scratch 
  so one can declare it as simple as a variable like below 
  
  ```cpp
  #include <stack>
  std::stack<int> local_stack;
  ```
  * Once you declare the stack you can use it directly, Main operations of stack can be used by inbuilt 
  methods like push, pop, and top.
  
  ```cpp
    local_stack.push(1);    //insert element to stack.
    local_stack.pop();      //pop out element from stack.   
    local_stack.top();      //gives the top element on the stack.
    local_stack.size();     //gives the size of the stack.
  ```
 # Queues
 * Queues are the Data structure which works on the principle of FIFO(First In First Out). i.e.
  the element which is inserted at first will be poped out first.
  
  * Queue data structure  are also provided by C++ they can be declared as below
  
  ``` cpp
  #include <queue>
  std::queue<int> local_queue;
  ```
  
  * Once you declare it you can do multiple operations on it,few of them are enque,deque,size .
  
  ```cpp
   local_queue.push(1);       //inserts elements to queue
   local_queue.pop();         //pops out element from the queue
   local_queue.front();       //displays the front element of the queue
   local_queue.size();        //gives the size fo the queue
  ```
  
  
