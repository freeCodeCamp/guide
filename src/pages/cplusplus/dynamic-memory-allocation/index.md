---
title: Dynamic Memory Allocation
---
## Dynamic Memory Allocation in C++

### What is Dynamic Memory Allocation in C++?
* **Memory Allocation** in C++ refers to the memory alloted to the variables you use throughout your program.
* **Dynamic Memory Allocation** is the memory which is alloted to the variables at the run-time and the amount of memory required is also decided at the run-time.
* This memory comes from **heap**, whereas _non-static_ variables and _local_ variables get memory from **stack**.
* In C++, the programmer can perform memory allocations manually, and is called as **_dynamic memory allocation_**.
* It was possible in C to do dynamic memory allocation, by using _calloc_ and _malloc_ functions to allocate memory and using _free_ function to de-allocate the dynamic memory.
* In C++, in addition to above, there are two functions, _new_ and _delete_ for performing dynamic memory allocation and de-allocation.

### NEW operator
* `new` operator can grant the programmer memory from the heap (if available). If the memory which the programmer asks is available, then the `new` operator initializes the memory and then returns the address (reference) of the memory allocated.
* **Syntax**  
 `pointer-variable-type` = **new** `data-type;`  
 Example 1: `int *ptr` = **new** `int;`  
 Example 2: `int *ptr2` = **new** `int[10];`  
 Here, `pointer-variable-type` is a **pointer** of `data type`. The `data-type` can be int, char, etc. or user-defined data-type.    

### DELETE operator
* It is programmer's responsibility to de-allocate the dynamically allocated memory otherwise the memory would not be available to be re-allocated until the end of the program.
* To deallocate the memory, `delete` operator is available and can be used by the programmer.
* **Syntax**  
 **delete** `pointer-type-variable;`  
 For example to free the memory allocated in example 1 above, we type:  
 `delete ptr;`  
 Similarly, for example 2, the memory can be freed by:  
 `delete ptr2`;
 ### Example:
#include <iostream> 
using namespace std; 
  
int main () 
{ 
    // Pointer initialization to null 
    int* p = NULL; 
  
    // Request memory for the variable 
    // using new operator 
    p = new int; 
    if (!p) 
        cout << "allocation of memory failed\n"; 
    else
    { 
        // Store value at allocated address 
        *p = 29; 
        cout << "Value of p: " << *p << endl; 
    } 
  
    // Request block of memory 
    // using new operator 
    float *r = new float(75.25); 
  
    cout << "Value of r: " << *r << endl; 
  
    // Request block of memory of size n 
    int n = 5; 
    int *q = new int[n]; 
  
    if (!q) 
        cout << "allocation of memory failed\n"; 
    else
    { 
        for (int i = 0; i < n; i++) 
            q[i] = i+1; 
  
        cout << "Value store in block of memory: "; 
        for (int i = 0; i < n; i++) 
            cout << q[i] << " "; 
    } 
  
    // free the allocated memory 
    delete p; 
    delete r; 
  
    // free the block of allocated memory 
    delete[] q; 
  
    return 0; 
} 
**output**
Value of p: 29
Value of r: 75.25
Value store in block of memory: 1 2 3 4 5 
