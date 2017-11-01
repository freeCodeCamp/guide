---
title: Hash Tables
---
#### A data structure which implements an associative array abstract data type which is a structure that can map keys to values.

```

key         hash function      array
             +--------+
             |        |       00 - value5
item1--------|--------|-    - 01 - value2
             |        | \  /  02 - value6
item2--------|--------|--\-   03 - value4
             |        |   --- 04 - value1
item3--------|--------|-_     05 - value0
             |        |  ---- 06 - value3
             +--------+
```
The idea of hashing is that it uses a unique id for a specific element from a group of similar elements. The hash table is made up of two parts, and array where the data is stored, and function that maps data to the array. The function is known as a hash function. The hash function computes the index by converting large keys into small keys. The idea is to distribute key value pairs uniformly within the array. Each element is assigned a key value pair which can then be quickly retrieved using the hash key.

| Algorithm      | Average     |Worst Case     |
| ----------|-------------|
| Space      |O(n) |O(n) |
| Search   |O(1) |O(n) |
| Insert      |O(1) |O(n) |
| Delete      |O(1) |O(n) |

#### Advantages
* In many cases, hash tables are more efficient than search trees or other table lookup structures.

#### Disadvantages
* Hash collisions which are hard to avoid if you are hashing a rnadom set of possible keys.

#### Applications
* Useful in situations with unpredictable set of keys, and we want to a associate information at O(1) to implement a quick lookup. Thus they are widely used for associative arrays, database indexing, caches, and sets.

#### Examples of hash tables in real life:
* Library Book Index
* University Student Id Numbers

#### More Information
https://algs4.cs.princeton.edu/34hash/


