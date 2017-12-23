---
title: The Auto Feature
---

## The Auto Feature

`auto` is a C++11 feature that lets the compiler infer the data type for us in a definition. 

Without `auto`
```cpp
double x = 10.425;
double y = x * x;
```

With `auto`
```cpp
double x = 10.425;
auto y = x * x;
```

Whilst it may seem trivial, it becomes incredibly useful when data types begin to get complicated. For example, if a user wanted to store a vector of employees that had their name and age. One way to store the name and age could be a `pair` with a `string` and an `unsigned int`. This is represented as `std::vector<std::pair<std::string, unsigned int>> employees`. Now suppose we wanted to access the last employee added:

```cpp
std::vector<std::pair<std::string, unsigned int>> employees;

// without auto
std::pair<std::string, unsigned int>> last_employee = employees.back();

// with auto
auto last_employee = employees.back();
```

Once the compiler determines the type on the right side of the `=` it replaces `auto` with that type.
