# The Standard Template Library (STL)

STL is a collection of container and algorithm implementations built in to C++ along with iterators. These are extrememly useful in building your projects as they have correct, standard and efficient implementations of the said containers and algorithms. Iterators enable algorithms to access and manipulate data present in the containers. Knowledge of STL is essential to ensure you do not end up reinventing the wheel.

## Containers
STL provides a range of containers to allow the storage of other objects. Now these may be **Sequence Containers** such as ```std::vector```, ```std::list```, ```std::deque```, **Associative Containers** such as ```std::set```, ```std::map```, ```std::multiset```, ```std::mutimap``` or **Container Adpators** such as ```std::stack```, ```std::queue```, ```std::priority_queue```.

Containers in STL are *templated*, i.e. they can be used with any data type/ object. Therefore it is possible to have a container of integers, floats, strings etc. It is even possible to have a container of objects of a user-defined class.

## Algorithms
STL also provides a large library of algorithms. These include efficient implementations of standard problems such as sorting, searching, merging, reversing etc. To use this library of algorithms you must import a header file called algorithm. This can be done by ```#include <algorithm>```. Most algorithm implementations take iterators as input parameters.
