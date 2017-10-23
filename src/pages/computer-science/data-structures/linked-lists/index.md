---
title: Linked Lists
---
## Linked Lists


Linked List |  (Introduction)

Like arrays, *linked lists* are a linear data structure. Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers.

Why Linked List?

Arrays can be used to store linear data of similar types, but arrays have following limitations:
* The size of the arrays is fixed, so we must know the number of elements in advance. Also, generally, the allocated memory is equal to the number of elements, irrespective of the usage.
* Inserting a new element in an array of elements is expensive, because space must be created to insert the new element(s). Also, the existing elements need to be inventoried, so they can be successfully shifted around as necessary.

For example, assume we have a sorted list as follows, called *id[]*:

```
id[] = [1000, 1010, 1050, 2000, 2040]
```

If we want to insert a new ID 1005, which would rest between indexes 0 and 1, then we must create room at this space, as well as track all other elements, so their sorted order can be maintained correctly.

Deletion is also expensive with linked lists, for the same reasons insertion is expensive. For example, to delete 1010 in id[], everything after 1010 has to be inventoried and shifted to the left. While maintaining a list of five elements is simple, regardless of structure, lists that contain thousands or tens of thousands of elements would become too taxing on the system to maintain.

