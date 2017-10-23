---
title: Hash Tables
---
## Hash Tables

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/data-structures/hash-tables/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

A Hash Table (or as it also known, a Hash Map) is a data structure that can map keys to values. Every hash table has a hash function that computes an index to a given key, such that a certain value can be found using said key.

![an example of a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?raw=true)

A hash table has an average time complexity of O(1) for Search, Insert and Delete functions, while worst case is O(n).

In a perfect world, a hash function will map each value to one key, but since you are not living in a perfect world, what might happen is that the hash function will give the same key for different values. This is what is called hash collisions.

Hash Collisions
When you are using a hash map you have to assume that hash collisions are unavoidable, since you will be using a hash map which is significantly smaller in size than the amount of data you have. The two main approaches to solving these collisions are : Chaining and Open Addressing.

Chaining
One way you can resolve hash collisions is using chaining. What this means is for each key-value mapping in the hash table, the value field will not hold only one cell of data, but rather a linked list of data. In the example shown in the image below, you can see that Sandra Dee is added as another element to key 152 after John Smith.

![an example of chaining in a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/620px-Hash_table_5_0_1_1_1_1_0_LL.svg.png?raw=true)

The major setback regarding chaining is the increase in time complexity. This means, that instead of the O(1) properties of a regular hash table, each action will now take greater time as we need to traverse the linked list.

Open Addressing
Another way you can resolve hash collisions is using open addressing. In this method once a value is mapped to a key that is already occupied, you move along the adjacent keys of the hash table in a preordained determined fashion, until you find a key with an empty value. In the example shown in the image below, Sandra Dee is mapped to key 153, even though her value is supposed to be mapped to 152.

![an example of open addressing in a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png?raw=true)

The major setback of open addressing lies in the fact that when needing to look for values, they might not be in the place you expect them to be (the key mapping). Therefore you have to traverse parts of the hash table in order to find the value you are looking for, thus resulting in increased time complexity.

For more information regarding hash tables, go to : https://en.wikipedia.org/wiki/Hash_table
