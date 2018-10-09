---
title: Sets
---

## Introduction to sets

`set` are a type of associative containers in which each element has to be unique, because the value of the element identifies it. The value of the element cannot be modified once it is added to the set, though it is possible to remove and add the modified value of that element. They are similar to maps because both `std::set` and `std::map` are associative containers. The difference is that std::sets contain only the key, while in std::map there is an associated value. Choosing one over the other depends mainly on what the task at hand is. Moreover, `std::set` are immutable in nature.

## Benefits of using sets

* It’s doesn’t allow duplicate elements i.e. it only contains unique elements.
* `std::set` can contain element of any specified type in template argument i.e..
* `std::set` internally store elements in balanced binary tree.
* `std::set` will keep the inserted elements in sorted order based on the assigned sorting criteria i.e. either by default criteria operator `<` or by passed comparator (if passed)
* By default `std::set` uses the operator `<` for comparing two elements and but if user passes the external sorting criteria i.e. comparator then it uses that instead of default operator `<`.

### Example using sets
```c++
#include<iostream>
#include<set>
#include<string>
 
using namespace std;
 
int main()
{
	set<int> numberSet;
 
	// Building our set
	numberSet.insert(1);
	numberSet.insert(2);
	numberSet.insert(2);
	numberSet.insert(3);
 
	cout<<"Size of numberSet is : "<<numberSet.size()<<endl; // Output should be 3
 
	// Set traversal i.e. accessing the set
	set<int>::iterator it;
	cout<<"Set elements  : ";
	for(it = numberSet.begin(); it!=numberSet.end(); it++)
		cout<<*it<<" ";
 
	return 0;
}
```

Output :
```
Size of numberSet is : 3
Set elements  : 1 2 3 
```

### Creating the set object 

`set<int> numberSet` creates a set object named 'numberSet'.

### Insertion in set

`numberSet.insert(1)` inserts '1' in our set. However, it must be noted that even though we added 4 items in our example our set object's size was 3 only, since '2' was already present in the set, it was not added in the set again supporting no duplicacy.

### Traversal of set

```c++

    set<int>::iterator it;
	for(it = numberSet.begin(); it!=numberSet.end(); it++)
		cout<<*it<<" ";

```

To learn more about sets in c++ , you can refer to - http://www.cplusplus.com/reference/set/set/ 