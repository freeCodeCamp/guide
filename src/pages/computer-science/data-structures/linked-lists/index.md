---
title: Linked Lists
---
## Linked Lists


Linked List |  (Introduction)
Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers or like in the example using Javascript, a reference to the next node.

Why Linked List?
Arrays can be used to store linear data of similar types, but arrays have following limitations.
1) The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
2) Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to shifted.

Advantages over arrays
1) Dynamic size
2) Ease of insertion/deletion

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