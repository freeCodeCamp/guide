---
title: Hash Tables
---

## Hash Tables

A hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

![an example of a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?raw=true)

A hash table has an average time complexity of O(1) for Search, Insert and Delete functions, while worst case is O(n).

Here's an explanation in layman's terms.

Let's assume you want to fill up a library of books and not just stuff them in there, but you want to be able to easily find them again when you need them.

So, you decide that if the person that wants to read a book knows the title of the book and the exact title to boot, then that's all it should take. With the title, the person, with the aid of the librarian, should be able to find the book easily and quickly.

So, how can you do that? Well, obviously you can keep some kind of list of where you put each book, but then you have the same problem as searching the library, you need to search the list. Granted, the list would be smaller and easier to search, but still you don't want to search sequentially from one end of the library (or list) to the other.

You want something that, with the title of the book, can give you the right spot at once, so all you have to do is just stroll over to the right shelf, and pick up the book.

But how can that be done? Well, with a bit of forethought when you fill up the library and a lot of work when you fill up the library.

Instead of just starting to fill up the library from one end to the other, you devise a clever little method. You take the title of the book, run it through a small computer program, which spits out a shelf number and a slot number on that shelf. This is where you place the book.

The beauty of this program is that later on, when a person comes back in to read the book, you feed the title through the program once more, and get back the same shelf number and slot number that you were originally given, and this is where the book is located.

The program, as others have already mentioned, is called a hash algorithm or hash computation and usually works by taking the data fed into it (the title of the book in this case) and calculates a number from it.

For simplicity, let's say that it just converts each letter and symbol into a number and sums them all up. In reality, it's a lot more complicated than that, but let's leave it at that for now.

The beauty of such an algorithm is that if you feed the same input into it again and again, it will keep spitting out the same number each time.

Ok, so that's basically how a hash table works.

Technical stuff follows.

First, there's the size of the number. Usually, the output of such a hash algorithm is inside a range of some large number, typically much larger than the space you have in your table. For instance, let's say that we have room for exactly one million books in the library. The output of the hash calculation could be in the range of 0 to one billion which is a lot higher.

So, what do we do? We use something called modulus calculation, which basically says that if you counted to the number you wanted (i.e. the one billion number) but wanted to stay inside a much smaller range, each time you hit the limit of that smaller range you started back at 0, but you have to keep track of how far in the big sequence you've come.

Say that the output of the hash algorithm is in the range of 0 to 20 and you get the value 17 from a particular title. If the size of the library is only 7 books, you count 1, 2, 3, 4, 5, 6, and when you get to 7, you start back at 0. Since we need to count 17 times, we have 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, and the final number is 3.

Of course modulus calculation isn't done like that, it's done with division and a remainder. The remainder of dividing 17 by 7 is 3 (7 goes 2 times into 17 at 14 and the difference between 17 and 14 is 3).

Thus, you put the book in slot number 3.

This leads to the next problem. Collisions. Since the algorithm has no way to space out the books so that they fill the library exactly (or the hash table if you will), it will invariably end up calculating a number that has been used before. In the library sense, when you get to the shelf and the slot number you wish to put a book in, there's already a book there.

Various collision handling methods exist, including running the data into yet another calculation to get another spot in the table (double hashing), or simply to find a space close to the one you were given (i.e. right next to the previous book assuming the slot was available also known as linear probing). This would mean that you have some digging to do when you try to find the book later, but it's still better than simply starting at one end of the library.

Finally, at some point, you might want to put more books into the library than the library allows. In other words, you need to build a bigger library. Since the exact spot in the library was calculated using the exact and current size of the library, it goes to follow that if you resize the library you might end up having to find new spots for all the books since the calculation done to find their spots has changed.

In a perfect world, a hash function will map each value to one key, but since you are not living in a perfect world, what might happen is that the hash function will give the same key for different values. This is what is called hash collisions.

### Hash Collisions
When you are using a hash map you have to assume that hash collisions are unavoidable, since you will be using a hash map which is significantly smaller in size than the amount of data you have. The two main approaches to solving these collisions are Chaining and Open Addressing.

#### Chaining
One way you can resolve hash collisions is using chaining. What this means is for each key-value mapping in the hash table, the value field will not hold only one cell of data, but rather a linked list of data. In the example shown in the image below, you can see that Sandra Dee is added as another element to key 152 after John Smith.

![an example of chaining in a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/620px-Hash_table_5_0_1_1_1_1_0_LL.svg.png?raw=true)

The major setback regarding chaining is the increase in time complexity. This means, that instead of the O(1) properties of a regular hash table, each action will now take greater time as we need to traverse the linked list.

#### Open Addressing
Another way you can resolve hash collisions is using open addressing. In this method once a value is mapped to a key that is already occupied, you move along the adjacent keys of the hash table in a preordained determined fashion, until you find a key with an empty value. In the example shown in the image below, Sandra Dee is mapped to key 153, even though her value is supposed to be mapped to 152.

![an example of open addressing in a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png?raw=true)

The major setback of open addressing lies in the fact that when needing to look for values, they might not be in the place you expect them to be (the key mapping). Therefore you have to traverse parts of the hash table in order to find the value you are looking for, thus resulting in increased time complexity.

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[Hash Tables on Wikipedia](https://en.wikipedia.org/wiki/Hash_table)

[Basics of Hash Tables - HackerEarth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
