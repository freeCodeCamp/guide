---
title: Linked Lists
---
## Linked Lists
 
#### A Linked List is a simple *linear-access* data structure. 
A linked list is a simple data structure, but it can be used to implement more complicated Data Structures like Queues, Stacks, etc. There are three types of Linked Lists:

1. Simple Linked List
2. Doubly Linked List (or Double Ended Linked List)
3. Circular Linked Lists (Ring Buffer)

If you want to understand Linked Lists, it helps to understand **Arrays**.

To recap, an array is traditionally a **static** **linear** data structure that supports constant time random access. Insertions and Deletions are not always constant time.

``` 
static = size fixed at creation time
linear = stored linearly in memory as a single block
```

#### Arrays have the following disadvantages:-
1. Arrays are static structures and therefore cannot be easily extended or reduced to fit the data set. 
2. Arrays are also expensive to maintain new insertions and deletions.

Linked Lists address some of the limitations of arrays. Unlike an array, where all the elements are stored in a contiguous block of memory, in a linked list each element is a separate object and has a **link** to the next element in sequence. This allows a linked list to start with space for only one element, and grow to accomodate an arbitrary number of elements by allocating memory as and when needed. 

Deleting elements is also simply handled by manipulating links.

Once you understand the Simple Linked List (which from here on will be referred as **'List'**), you can move on to the Doubly Linked List.

A List as illustrated below is made up of the following components:-
```
         head    
             |
             | 
        +---+---+     +---+---+       +----+------+
        | 1  | o----->|  2  | o-----> |  3 |   φ  |
        +---+---+     +---+---+       +----+------+       
                                              |
                                              | 
                                              tail    
```
| Node      | Significance     |
| ----------|-------------|
| HEAD      | Beginning of the List|
| Node(s)   | Dynamically allocated self-referential block contain 1 Data element and a link to the next node |
| TAIL      | End of the List |

Most common operations available on List are,  
1. AddFirst - Inserts an element at the front of the List.  
2. AddLast - Inserts an element at the tail of the List.
3. InsertAfter - Inserts an element after an existing element in the List.
4. InsertBefore - Inserts an element before an existing element in the List.
5. Remove - Remove an existing element from the List.
6. Access / Peek - Access an existing element from the List.
7. Size / Count - Returns the number of elements currently present in the List.
8. IsEmpty - Check whether the List is empty or not.

#### Implementation of a Simple Linked List in C++
```cpp
#include<iostream>
using namespace std;

struct Number
{
	int num;
	struct Number *tail;
};

typedef struct Number N;

class List
{
	private:
		N *head,*end;
		int count;
	
	public:
		void display();
		void insertBefore(int);
		List();
};

List :: List()
{
	head=NULL;
	end=NULL;
	count=0;
}

void List :: insertBefore(int data)
{
		N *node;
		node= new N;
		node->num=data;
		node->tail=NULL;
		
		if(!head){
			head=end=node;	
		}
		
		else{
			node->tail=head;
			head=node;	
		}
		
		count++;	
}

void List :: display()
{
	cout<<"Number of nodes in the list = "<<count<<endl;
	N *node;
		node=head;
	while(node) 
	{
		
		cout<<node->num<<endl;
		node=node->tail;
		
	}
	
}
int main()
{
	List l1;
	
	l1.insertBefore(10);
	l1.insertBefore(20);
	l1.insertBefore(30);	
	l1.insertBefore(40);
	l1.insertBefore(50);
	l1.display();
	
	return 0;
}
 
```

#### OUTPUT 
```
Number of nodes in the list = 5
50
40
30
20
10
```

#### Explanation
```cpp

struct Number
{
	int num;
	struct Number *tail;
		
};
```
Declaration of a structure(node) with 2 data members
* `num` holds the integer data value
* `*tail` pointer points to the next node in the List

```cpp
class List
{
	private:
		N *head,*end;
		int count;
	
	public:
		void display();
		void insertBefore(int);
		List();
};
```
The List class declares the Linked List.
* `*head` points to the first node in the List
* `*end` points to the last node in the List
* `count` holds the value for number of nodes in the list
* `display()` is used to print the complete list on the console
* `insertBefore()` is used to insert a new node
* `List()` is a defualt constructor

```cpp
List :: List()
{
	head=NULL;
	end=NULL;
	count=0;
}
```

The default constructor is used to initialize the data members of the List class with default values

```cpp
void List :: insertBefore(int data)
{
		N *node;
		node= new N;
		node->num=data;
		node->tail=NULL;
		
		if(!head){
			head=end=node;	
		}
		
		else{
			node->tail=head;
			head=node;	
		}
		
		count++;	
}
```

* A new node is created. 
* `num` is assigned the value of `data`.
* `tail` is pointing to Null.
* The `if(!head)` condition is true only when there are no elements in the List. 
* When this is the case, `head` and `end` are both pointing to the newly created node.
* Control will move to the `else` section, when there is at least one node in the list.
* In this case, `tail` pointer in the newly created node is made to point to the `head`(first) node.
* The `head` pointer then points to the newly created node to make it the first node in the list.
* `count` is incremented by 1	as each new node is added.
  
```cpp
void List :: display()
{
	N *node;
	node=head;
	while(node)
	{
		cout<<node->num<<endl;
		node=node->tail;
	}
}
```
The display function is used to run through the list and print the total number of nodes and values of `num` on the console.

#### Applications  
* Base Data Structure for Vector, Array, Queue, Stack, etc  
* Polynomial Representation  
* Ring Buffer  

#### More Information:
* <a href='http://www.geeksforgeeks.org/linked-list-set-1-introduction/' target='_blank' rel='nofollow'>Introduction to Linked Lists</a>

