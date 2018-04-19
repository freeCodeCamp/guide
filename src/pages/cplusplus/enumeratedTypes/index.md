---
title: Enumerated types
---

# Enumerated types

An enumerated type is a convenience type that lets you assign meaningful names to integer constants, so that they are easier to remember as you write code. Enumerated types are typically used to read, write, select, and compare among a finite and small number of discrete values for a variable.

The `enum` keyword is used to declare an enumerated type:

```cpp
enum gasoline {regular, premium, highoctane};
```

A variable can then be declared using the enumerated type:

```cpp
gasoline myBlueCarGasType;
```
And the value assigned using one of the enumerated type's values:

```cpp
myBlueCarGasType = premium;
```

Under the hood, the above declaration assigns the values 0, 1, and 2 to `regular`, `premium`, and `highoctane`, respectively, however you can override the default integer assignments as follows:

```cpp
enum gasoline {regular=87, premium=87, highoctane=93};
```
