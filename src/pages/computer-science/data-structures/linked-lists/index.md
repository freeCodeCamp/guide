---
title: Linked Lists
---

## Linked Lists

#### A Linked List is a simple *linear-access* data structure. 
A linked list is a simple data structure, but it can be used to implement more complicated Data Structures like Queues, Stacks, etc. There are three types of Linked Lists:

1. Simple Linked List
2. Doubly Linked List (or Double Ended Linked List)
3. Circular Linked Lists (Ring Buffer)


Linked List |  (Introduction)
Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers or like in the example using Javascript, a reference to the next node.

If you want to understand Linked Lists, it helps to understand **Arrays**.


To recap, an array is traditionally a **static** **linear** data structure that supports constant time random access. Insertions and Deletions are not always constant time.


Advantages over arrays
1) Dynamic size
2) Ease of insertion/deletion

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


#### Applications  
* Base Data Structure for Vector, Array, Queue, Stack, etc  
* Polynomial Representation  
* Ring Buffer  

#### More Information:
* <a href='http://www.geeksforgeeks.org/linked-list-set-1-introduction/' target='_blank' rel='nofollow'>Introduction to Linked Lists</a>

Drawbacks:
1) Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists.
2) Extra memory space for a pointer is required with each element of the list


Types:
1) (Singly) linked lists contain nodes which have a data field as well as a 'next' field, which points to the next node in line of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal.

2) (Doubly) In a 'doubly linked list', each node contains, besides the next-node link, a second link field pointing to the 'previous' node in the sequence. The two links may be called 'forward('s') and 'backwards', or 'next' and 'prev'('previous').

Example in Javascript:
```
function LinkedList () {
		this.head = null;
		this.tail = null;
	}

    // Node has three properties value, next, prev

	function Node (value, next, prev) {

		this.value = value;

	// A 'pointer' referencing to the next Node (if present) otherwise null

		this.next = next;

	// A 'pointer' referencing the previous Node, otherwise null

		this.prev = prev;
	}

    LinkedList.prototype.addToHead = function(value) {
	
		let newNode = new Node(value, this.head, null);

		if (this.head) this.head.prev = newNode;

		else this.tail = newNode;

		this.head = newNode;
	}




```
Now Execute code
```
let LL = new LinkedList();

	LL.addToHead(100);

	LL.addToHead(200);
    
	console.log(LL);

```

Representation in C:
A linked list is represented by a pointer to the first node of the linked list. The first node is called head. If the linked list is empty, then value of head is NULL.
Each node in a list consists of at least two parts:
1) data
2) pointer to the next node
In C, we can represent a node using structures. Below is an example of a linked list node with an integer data.
In Java, LinkedList can be represented as a class and a Node as a separate class. The LinkedList class contains a reference of Node class type
```C
// A linked list node
struct Node
{
  int data;
  struct Node *next;
};
```
# Linked List with three elements
```c
// A simple C program to introduce
// a linked list
#include<stdio.h>
#include<stdlib.h>
 
struct Node 
{
  int data;
  struct Node *next;
};
 
// Program to create a simple linked 
// list with 3 nodes
int main()
{
  struct Node* head = NULL;
  struct Node* second = NULL;
  struct Node* third = NULL;
   
  // allocate 3 nodes in the heap  
  head = (struct Node*)malloc(sizeof(struct Node)); 
  second = (struct Node*)malloc(sizeof(struct Node));
  third = (struct Node*)malloc(sizeof(struct Node));
 
  /* Three blocks have been allocated  dynamically. 
     We have pointers to these three blocks as first, second and third     
       head           second           third
        |                |               |
        |                |               |
    +---+-----+     +----+----+     +----+----+
    | #  | #  |     | #  | #  |     |  # |  # |
    +---+-----+     +----+----+     +----+----+
    
   # represents any random value.
   Data is random because we haven’t assigned anything yet  */
   
  head->data = 1; //assign data in first node
  head->next = second; // Link first node with the second node
   
  /* data has been assigned to data part of first block (block 
    pointed by head).  And next pointer of first block points to
    second.  So they both are linked.
 
       head          second         third
        |              |              |
        |              |              |
    +---+---+     +----+----+     +-----+----+
    | 1  | o----->| #  | #  |     |  #  | #  |
    +---+---+     +----+----+     +-----+----+    
  */ 
   
  second->data = 2; //assign data to second node
  second->next = third; // Link second node with the third node
   
  /* data has been assigned to data part of second block (block pointed by
     second). And next pointer of the second block points to third block.  
    So all three blocks are linked.
   
       head         second         third
        |             |             |
        |             |             |
    +---+---+     +---+---+     +----+----+
    | 1  | o----->| 2 | o-----> |  # |  # |
    +---+---+     +---+---+     +----+----+      */   
   
  third->data = 3; //assign data to third node
  third->next = NULL;
   
  /* data has been assigned to data part of third block (block pointed
    by third). And next pointer of the third block is made NULL to indicate
    that the linked list is terminated here.
 
     We have the linked list ready.  
 
           head    
             |
             | 
        +---+---+     +---+---+       +----+------+
        | 1  | o----->|  2  | o-----> |  3 | NULL |
        +---+---+     +---+---+       +----+------+       
    
     
    Note that only head is sufficient to represent the whole list.  We can 
    traverse the complete list by following next pointers.    */     
 
  return 0;
}
```
