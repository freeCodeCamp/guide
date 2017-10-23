---
title: List Pop Method
---
# Pop Function
The method pop() removes and returns last element from the list. There is an optional parameter, index of the element to be removed from the list.
If the index passed to the pop() method is not in the range, it throws IndexError: pop index out of range exception.



#### Example Usage
 ```py
cities = ['New York', 'Dallas', 'San Antonio', 'Houston', 'San Francisco'];

print "City popped is : ", cities.pop()
print "City at index 2 is  : ", cities.pop(2)
 ```
 
 #### Output
 ```
City popped is :  San Francisco
City at index 2 is  :  San Antonio
 ```
 
 #### More Information:
 The official documentation for `pop()` can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>
 
