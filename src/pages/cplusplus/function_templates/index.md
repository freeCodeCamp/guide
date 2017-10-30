---
title: Function Templates
---

# Function Templates
Function Templates in C++ have the ability to greatly reduce the amount of boiler-plate code.

## Overview
One of the best examples of template use in C++ is is the `max` function. Consider the logic behind the max function. If we have two numbers *x* and *y*, the max function will return the greater of the two, it may be implemented like so: 

```cpp
int max (int x, int y) {
	return x > y ? x : y;
}
```

Simple, right? Well, what if we have floats? We already know as is, that this will not suffice as the return type of our max function results in an `int`, thus we'd throw away any extra data that may exist in our `float`, additionally, we know that the maximum value held by `int` is a fraction of that of `float`.

## A Naïve Approach
Many woudld opt for the preprocessor macro `#define MY_MAX(x, y) (((x) > (y)) ? (x) : (y))`. What happens if we had a program like:

```cpp
void myFunc(){
	int a = 10, b = 11;
	std::cout << MY_MAX(++a, ++b) << std::endl; // outputs 13...what?
}
```

This function prints the number 13, but why? Macro expansion. Our macro expands to:

```cpp
(((++a) > (++b)) ? (++a) : (++b))
```

So `a` and `b` are incremented twice. While we could just work around this, it's not really a clean solution, and certainly not one that we should strive to use. Instead, a template is much better suited for this operation.

## The Template Approach
In order to write the `max` function using a template, we must first understand one of the the principle template directives – template type introduction. In the below code, we introduce a template type using the following code: `template<typename MyType>` where `MyType` is an alias for our type name – this can be any valid variable name, often libraries opt for the name `T` for Type.

```cpp
template<typename MyType>
inline MyType my_max(MyType x, MyType y) {
    return x > y ? x : y;
}
```

How does this work? Templates are essentially structures of functions. Consider that, if `my_max` were to never be called in your program, it would never exist within the compiled binary. This is because when a template function is called with a given type, the compiler generates a function for that type. So, by calling `my_max(myInt1, myInt2)` (where `myInt1` and `myInt2` are `ints`) the compiler will generate a function such as `inline int my_max(int x, int y){ ... }`. Furthermore, if we were to call `my_max` with two `floats`, the compiler would generate a function like: `inline int my_max(float x, float y){ ... }`. This is an important limitation to be aware of with templates, they are not as dynamic as they may seem.

### The Cost of Templates
Templates are not free. If, for example, you call the above `my_max(...)` with `short`, `unsigned short`, `int`, `unsigned int`, `long`, `long long,` `float` and `double` as parameter types, 8 `my_max(...)` functions would be present in your binary. This is also an important consideration when calling larger template-based classes, such as `std::vector`. This may seem like a pitfall, but there is a silver-lining. This means that your binary only ships with what it needs i.e. you pay for what you use.
