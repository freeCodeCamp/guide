# std::vector
The Standard Template Library(STL) provides several useful containers and algorithms built in to C++. These powerful tools help prevent the developer from reinventing the wheel. The vector is one such container provided by STL.

The ```std::vector``` is a sequence container that supports random access of data like an array. However, vectors can dynamically resize themselves when more data needs to be inserted. Thus they allow very efficient data access and relatively efficient adding or removing of elements from the end.

**Creating a vector object**

```C++
#include <iostream>
#include <vector>
int main(){
  std::vector<int> vec_name1;        //Creates an empty vector of integers called vec_name1
  std::vector<int> vec_name2(5,1);   //Creates a vector called vec_name2 and initializes it to have 5 integers having values 1
}
```
Let us go through this snippet line by line.

`#include<vector>` imports the header file containing the definition of the vector class. 

`std::vector<int> vec_name1` creates an empty vector object. The data type is specified using "< >". For example if we required a vector of string objects we would use `std::vector<std::string> string_vec`. 

`std::vector<int> vec_name2(5,1)` is used to create a vector containing a required number of elements initialized to a value. In this case the vector is initialized to contain 5 elements each having value 1. The second argument must be of the same data type as the vector itself. That is, `std::vector<std::string> string_vec(5,2)` is *invalid* as the second argument is an integer while the vector stores strings. Instead we can use `std::vector<std::string> string_vec(5,"2")`.

**Accesing an element from the vector**
```C++
  std::cout<<"The value in the 2nd index is : "<<vec_name2[2]<<'\n';
```
Vectors work on the same principle as arrays. They are zero-indexed, meaning their numbering starts from 0. They support random access, meaning any element in the vector can be accessed or modified in constant time. This can be done using the "[]" operator. However one must always be careful not to access an index greater than or equal to the size of the vector. Doing so results in a segmentation fault, causing the application to terminate. 

**Dynamically resizing the vector**
```C++
  vec_name2.push_back(25); //Increases the size of the vector by 1 and sets the last element to 25
  vec_name2.pop_back();    //Deletes the last element from the vector and reduces the size of the vector by 1
```
Vectors support dynamic resizing when elements are added or removed from the end of the vector. This can be done using the push_back and pop_back methods. 

The push_back method is used to dynamically add elements to the end of the vector. `vec_name2.push_back(25)` pushes 25 to the end of the vector. The size of the vector increases by 1 after this operation.

The pop_back method is used to dynamically remove elements from the end of the vector. `vec_name2.pop_back()` removes the last element from the vector. The size of the vector decreases by 1 after this operation.

**Iterating through all the elements of the vector**
```C++
  for(int i=0; i<vec_name2.size(); i++){                                   // vec_name2.size() returns the number of elements in the vector.
    std::cout<<"The value at the "<<i<<"th index is : "<<vec_name2[i]<<'\n';
  }
```
Vectors can be iterated through the same way as an array. A for loop is used to run from the 0th index upto the index size-1. The ith element of the vector can be accessed using the "[]" operator. 

However the best practice is to use iterators inorder to iterate.
```C++
  std::vector<int>::iterator vec_it;                                                                 //iterator for vector of int
  for(vec_it = vec_name2.begin(); vec_it != vec_name2.end(); vec_it++){
    std::cout<<"The value at the "<<(vec_it - vec_name2.begin())<<"th index is : "<<*vec_it<<'\n';
  }
```
`std::vector<int>::iterator vec_it` declares an iterator for a vector of integers called vec_it. Now `vec_name2.begin()` returns an iterator to the first element of the vector. `vec_name2.end()` returns an iterator to *after* the last element. 

Thus the loop runs from the first element to the last element. As soon as `vec_it` becomes equal to the `vec_name2.end()`, the loop terminates. 

Inside the loop, the current index position can be computed by subtracing the current iterator position from the iterator to the first element. This is done using  `vec_it - vec_name2.begin()`. To access the element present at the current index, we dereference the iterator, similar to dereferencing a pointer, using the unary `*` operator.

**Further Information**
Apart from these basic operations, vectors support several other operations. They can also interact with the built in algorithms provided by STL such as searching and sorting. For details about this and much more visit :
* http://www.cplusplus.com/reference/vector/vector/
* http://en.cppreference.com/w/cpp/container/vector
