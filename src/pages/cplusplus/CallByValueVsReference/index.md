---
title: Call by value vs. call by reference
---

# Call by value vs. call by reference

When you call a function, you may pass it arguments with either a "by value" calling convention, or a "by reference" calling convention.

Calling by value means that the value of an argument is passed to a function, and the function copies the value of that argument to its own local copy of the variable. This local copy is automatically created at the time the function is called, and it automatically is destroyed when the function returns execution to its caller:

```cpp
// Call by value example

int a = 10;

void add1(int a);
void add1(int a) {
	a++; // The a variable here is a local copy created when add1 is called
}

// a = 10
add1(a); // Passes the value of a to add1()
// a still is 10!
```
Calling by reference means that a reference to the variable is passed to the function. Pointers can be used to reference a variable, as they contain the memory address of the variable, and not the value of the variable itself:

```cpp
// Call by reference example

int b = 20;
int * pb = &b; // Pointer to variable b

void add1_p(int* pb);
void add1_p(int* pb){
	*pb += 1; // The pb variable here is a local copy but it contains the address of b
}

// b = 20
add1_p(pb); // Passes the address of b to add1_p
// b = 21
```

