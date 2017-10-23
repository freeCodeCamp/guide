---
title: Linked Lists
---
## Linked Lists
 
#### A Linked List is a simple *linear-access* data structure. 
It is one of the simplest data structures to grasp and understand. It can in turn be used to implement more complicated Data Structures like Queues, Stacks, etc. There are two types of Linked Lists,
1. Simple Linked List
2. Doubly Linked List (or Double Ended Linked List)
3. Circular Linked Lists (Ring Buffer)

If you want to understand Linked Lists, it helps to understand **Arrays**.

To recap, an array is traditionally a **static** **linear** data structure that supports constant time random access. Insertions and Deletions are not always constant time.
``` 
**static** = size fixed at creation time
**linear** = stored linearly in memory as a single block
```
#### Arrays have the following disadvantages:-
1. Arrays are static structures and therefore cannot be easily extended or reduced to fit the data set. 
2. Arrays are also expensive to maintain new insertions and deletions.

Linked Lists address some of the limitations of arrays. Unlike an array, where all the elements are stored in a contiguous block of memory, in a linked list each element is a separate object and has a **link** to the next element in sequence. This allows a linked list to start with space for only one element, and grow to accomodate an arbitrary number of elements by allocating memory as and when needed. 
Deleting elements is also simply handled by manipulating links.

If you can understand the Simple Linked List (which from here on will be referred as **'List'**), then understanding the Doubly Linked List is a trivial step.

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

The following is a simple implementation of the List with its most common operations.

``` 
To Be added later
```  

#### Applications  
* Base Data Structure for Vector, Array, Queue, Stack, etc  
* Polynomial Representation  
* Ring Buffer  

#### More Information:
* <a href='http://www.geeksforgeeks.org/linked-list-set-1-introduction/' target='_blank' rel='nofollow'>More Info on Linked Lists - GeeksForGeeks</a>
=======

Linked List |  (Introduction)
Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers.

Why Linked List?
Arrays can be used to store linear data of similar types, but arrays have following limitations.
1) The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
2) Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to shifted.

For example, in a system if we maintain a sorted list of IDs in an array id[].

id[] = [1000, 1010, 1050, 2000, 2040].

And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).
Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved.

Advantages over arrays
1) Dynamic size
2) Ease of insertion/deletion

Drawbacks:
1) Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists.
2) Extra memory space for a pointer is required with each element of the list

