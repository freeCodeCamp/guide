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
std::vector<bool> v; // v is an empty vector 
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

### Member Functions
There are some functions which will change the size of vectors , these functions are known as <b>Modifiers</b>
```
push_back() //It will add the new element at the end of the vector.
pop_back() //It will delete the new element from the end of the vector.
```

### Iterating Through a Vector
There are different ways to iterate through a vector and access its contents. The following forms are equivalent, the first one involves using a range-based expression (since C++11), the second one uses iterators, and the last one is a index-based iteration


``` cpp
#include <iostream>
#include <vector>

// First declare the vector
std::vector<int> myVector{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5

// Using a range based loop (since C++11)
for(int element : myVector ){  // Reads like "for every element in myVector"
  std::cout << "The element is " << element << std::endl;
}

// Using an iterator
std::vector<int>::iterator it; // Declare the iterator
for(it = myVector.begin(); it != myVector.end(); ++it){
  std::cout << "The element is " << *it << std::endl;  // Dereference the iterator to access its data
}

// Using indices
for(std::vector<int>::size_type i = 0; i != myVector.size(); i++){
  std::cout << "The element is " << myVector[i] << std::endl;  // Dereference the iterator to access its data
}

```
