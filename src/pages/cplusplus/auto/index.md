---
title: auto
---

## auto

`auto` is a C++11 feature that lets the compiler infer the data type for you in a definition. This can save you a lot of typing, especially with complicated types. 

Without `auto`:
```cpp
double x = 10.425;
double y = x * x;
```

With `auto`:
```cpp
double x = 10.425;
auto y = x * x;
```

While it may seem trivial, it becomes incredibly useful when data types begin to get complicated. For example, assume you want to store a [`vector`](https://guide.freecodecamp.org/cplusplus/vector) of employees, and you are only interested in their name and age. One way to store the name and age could be a `pair` with a `string` and an `unsigned int`. This is declared as `std::vector<std::pair<std::string, unsigned int>> employees`. Now suppose you want to access the last employee added:

```cpp
std::vector<std::pair<std::string, unsigned int>> employees;

// without auto, you have to write:
std::pair<std::string, unsigned int>> last_employee = employees.back();

// with auto, you just have to write:
auto last_employee = employees.back();
```

Once the compiler determines the type on the right side of the `=` it replaces `auto` with that type.

In modern versions of C++ (since C++14), `auto` can also be used in a function declaration as the the return type. The compiler will then infer the return type from the return statement inside of the function. Following the example with employees:

```
std::vector<std::pair<std::string, unsigned int>> employees;
auto get_last_employee() {
	return employees.back(); // Compiler knows the return type from this line.
}
```
The compiler will know from the line wit hthe return statement that the return type from the function should be `std::vector<std::pair<std::string, unsigned int>>`.

While quite technical, the [cppreference page on auto](http://en.cppreference.com/w/cpp/language/auto) describes many more usages of `auto` and the details of when it can and can't be used.
