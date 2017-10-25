---
title: vector
---

## Vectors

`vector` is one of the most used containers in C++. A container is a data structure that stores a collection of objects, some in order, some not. All containers have a different set of functions that allow you to access an object(s) in that collection.

`std::vector` is part of the C++ standard library (hence the prefix `std::`) and allows you to store contiguous data of the same data type. NOTE: **All objects within a vector must be of the same data type**

The data type you store within a vector goes within angle brackets next to the vector keyword. For example, if you would like to store a collection of strings the vector would be `std::vector<std::string> vector_name`

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

### size and capacity
The capacity of vector is decided at runtime. It increases by a factor of 2 if vector elements are filled upto its current capacity. Size of vector is different from its capacity. Following are some useful functions -
1. size() : Returns total number of elements present in the vector.
2. capacity() : Returns the maximum-capacity of that vector.
3. max_size() : Returns overall maximum number of elements that can be stored within vector. It is different from capacity().
4. empty() : Returns 1 if vector is empty and 0 if not.
```cpp
std::vector<int> v1;
std::vector<int> v2;

for(int i=1; i<=5; i++) {
    v1.push_back(i*i);
}

std::cout<<"capacity: "<<v1.capacity();    // Output => capacity: 8
std::cout<<"\nmax_size: "<<v1.max_size();  // Output => max_size: 1073741823
std::cout<<"\nsize: "<<v1.size();          // Output => size: 5
std::cout<<"\nis Empty: "<<v2.empty();     // Output => is Empty: 1
```