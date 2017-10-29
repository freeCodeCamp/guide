---
title: vector
---

## Vectors

`vector` is one of the most used containers in C++. A container is a data structure that stores a collection of objects, some in order, some not. All containers have a different set of functions that allow you to access an object(s) in that collection.

`std::vector` is part of the C++ standard library (hence the prefix `std::`) and allows you to store contiguous data of the same data type. NOTE: **All objects within a vector must be of the same data type**

The data type you store within a vector goes within angle brackets next to the vector keyword. For example, if you would like to store a collection of strings the vector would be `std::vector<std::string> vector_name`

*NOTE*: You must include the vector library whenever using vectors!

`#include <vector>`

### Vector Construction
There are many convinent ways to construct a vector.

Using an intializer list - where objects are listed inside a set of braces: `{ }`
```cpp
std::vector<int> a{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5
std::vector<std::string> b{"hello", "world"}; // b is a vector of 2 strings: "hello" and "world"
```

Constructing it from another vector (this is known as a copy construction)
```cpp
std::vector<double> a{1.0, 2.0, 3.0};
std::vector<double> b(a); // b is a vector of 3 doubles: 1.0, 2.0 and 3.0
```

Initializing it with the same element:
```cpp
std::vector<int> a(100, -1); // a is a vector of 100 elements all set to -1
```

### Vector Iterators

Iterators can be thought of as pointers specifically used for navigating containers 
(such as vectors). The most important iterators are `begin()` and `end()`.
`begin()` returns a pointer to the first item in a vector whereas `end()` points
to one position after the last item in a vector. As such looping through a 
vector can be done as :

```cpp
std::vector<int> vec{1, 2, 3};

for(auto vec_it = vec.begin(); vec_it != vec.end(); it++){
    // since vec_it is a pointer and points to the memory address of the item
    // inside the vector, vec_it must be dereferenced using '*'
    std::cout << *it << '\n';
}
/*  Output
    1
    2
    3
*/
```

### Modifying a Vector

Pushing items to a vector:
```cpp
std::vector<int> vec; // constructs an empty vector

for (int i = 0; i < 10; i = i + 2){
    vec.push_back(i);
}
// vec now holds [0, 2, 4, 6, 8]
```

Inserting an item in a particular position is slightly different. The C++ vector insert 
function works on iterators. It will insert the given item one position before the given
iterator.

```cpp
std::vector<unsigned int> vec{3, 400, 12, 45};

auto iter = vec.begin() + 2; // iter now points to '12'
vec.insert(iter, 38); // inserts '38' before '12'

// vec: [3, 400, 38, 12, 45]
```

### Element Access
The standard library provides different functions for accessing particular elements in your vector. 

```cpp
std::vector<std::string> a{"test", "element", "access"};

std::string first_item = a.front(); // gets the first item of the vector ("test")
std::string last_item = a.back(); // gets the last item in the vector ("access")

// To get an element at a specific index (remember: vector indices start at 0)
std::string second_item = a.at(2); // gets "element"
// OR
std::string second_item = a[2]; // gets "element"
```