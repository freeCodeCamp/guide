# The Standard Template Library (STL)

STL is a collection of container and algorithm implementations built in to C++. These are extrememly useful in building your projects as they have correct, standard and efficient implementations of the siad containers and algorithms. Knowledge of STL is essential to ensure you do not end up reinventing the wheel.

## Containers
STL provides a range of containers to allow the storage of other objects. Now these may be **Sequence Containers** such as ```std::vector```, ```std::list```, ```std::deque```, **Associative Containers** such as ```std::set```, ```std::map```, ```std::multiset```, ```std::mutimap``` or **Container Adpators** such as ```std::stack```, ```std::queue```, ```std::priority_queue```.

Containers in STL are *templated*, i.e. they can be used with any data type/ object. Therefore it is possible to have a container of integers, floats, strings etc. It is even possible to have a container of objects of a user-defined class.

### vector

The ```std::vector``` is a sequence container that supports random access of data like an array. However, vectors can dynamically resize themselves when more data needs to be inserted. Thus they allow very efficient data access and relatively efficient adding or removing of elements from the end.

**Creating a vector object**

```C++
#include <iostream>
#include <vector>
int main{
  std::vector<int> vec_name1;        //Creates an empty vector of integers called vec_name1
  std::vector<int> vec_name2(5,1);   //Creates a vector called vec_name2 and initializes it to have 5 integers having values 1
}
```
**Accesing an element from the vector**
```C++
  std::cout<<"The value in the 2nd index is : "<<vec_name2[2]<<endl;
```
**Iterating through all the elements of the vector**
```C++
  for(int i=0; i<vec_name2.size(); i++){                                   // vec_name2.size() returns the number of elements in the vector.
    std::cout<<"The value at the "<<i<<"th index is : "<<vec_name2[i]<<endl;
  }
```
