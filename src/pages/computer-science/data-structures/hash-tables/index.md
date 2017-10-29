---
title: Hash Tables
---
## Hash Tables

A hash table is a type of an associative array that maps a key to a value by using a hash function. The hash function takes the key and returns an integer. The resulting integer represents the index at which it will place that value. While you can create a hash function any way you'd like, below is one example:

![hash table](https://github.com/itsthecheat/images/blob/master/Slide1.jpg)

**Collisions**

Collisions occur when the hash function returns more than one index value that is the same. Taking the above example, let's say we want to add Rover the dog, and the resulting index was also 6. There are a few ways to handle collisions; one of which is to use a linked list. This saves both Fluffy and Rover at index 6, and we would then traverse the linked list to find the correct value.

**Note:**

* Hashing is not the same as encryption.
* Once you hash a key, there is no way to take that resulting integer and run it through another function to change it back.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
* [Hash Tables, Algorithms 4th Ed., by Robert Sedgewick & Kevin Wayne](https://algs4.cs.princeton.edu/34hash/)
* [Basics of Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)

#### Sources
* [The Importance of Hash Tables](https://medium.com/coderbyte/importance-of-hash-tables-c429a2b523b8)
