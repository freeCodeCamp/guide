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


#### Applications  
* Base Data Structure for Vector, Array, Queue, Stack, etc  
* Polynomial Representation  
* Ring Buffer  

#### More Information:
* <a href='http://www.geeksforgeeks.org/linked-list-set-1-introduction/' target='_blank' rel='nofollow'>Introduction to Linked Lists</a>

