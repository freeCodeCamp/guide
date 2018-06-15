---
title: Inline Function
---

# Inline Function

## Introduction
Inline function is a special function provided by c++ which is expanded inline when it is called. Now what does that exactly mean ? 
Whenever a function is called it takes a lot of extra time for performing series of activities such as jumping to the function, saving 
registers, pushing arguments into stack and returning to the calling function. So it takes a lot of extra amount of time. But an inline
function  is a function upon which the compiler has been requested to perform inline expansion. Where the function requests the compiler
to insert the complete body of the function in every place that the function is called, rather than generating code to call the function 
in the one place it is defined.

However we cannot gurantee that every function declared inline will be inline. Because when we declare function as inline function we are requesting compiler not a commanding. Compiler may ignore the request of inlining because of the following situations:-
1) if a function contains loop e.g for loop, while loop, do_while loop etc.
2) if a function contains switch or goto statement.
3) function not returning value if return type is mentioned.
4) if function contains static variable.
5) if function contains recursive call.

``` c++
syntax :-
---------
inline return_type function_name(argument_list){

  // function body
  
}
```
## When to use inline function

* When the function performing small task and called very often.
* Use inline function when performance is needed.
* Use inline function over macros.

``` c++
#include<iostream>

using namespace std;

class MathOperation{

  public:
  
    inline int add(int x, int y){
    
      return(x+y);
    }
    
    inline float div(int n1, float n2){
    
      return(n1/n2);
    }
};

int main(){

  MathOperation obj;
  
  cout<<"Addition is : "<<obj.add(34,12)<<endl;
  cout<<"Division is : "<<obj.div(12,3.4)<<endl;
  
  return 0;
  
}
```
## Advantages of inlie function
Following are some of the advantages of inline function:-
* It save overhead of return call from a function.
* It increases locality of reference by utilizing instruction cache.
* It speeds up your program by avoiding function calling overhead.
* It save overhead of variables push/pop on the stack, when function calling happens.
* By marking it as inline, you can put a function definition in a header file.
(i.e. it can be included in multiple compilation unit, without the linker complaining)

## Disadvantages of inline function
* When used in a header, it makes your header file larger with information which users don’t care.
* It increases the executable size due to code expansion. 
* C++ inlining is resolved at compile time. Which means if you change the code of the inlined function,
you would need to recompile all the code using it to make sure it will be updated.
* As mentioned above it increases the executable size, which may cause thrashing in memory. 
More number of page fault bringing down your program performance.
