---
title: Python Set Types
---
A set object is an unordered collection of distinct hashable objects. Common uses include membership testing, removing duplicates from a sequence, and computing mathematical operations such as intersection, union, difference, and symmetric difference. Let's have quick look on these operation one by one with example and code.
Before diving in to learing about sets and how to use them to perfrom mathematical operations such as intersection, union, difference, and symmetric difference. let's learn how to create set first.

> Set's are typically created by using curly braces`{}`
  Example :
  Empty Set
  ```
  s1 = {}
  print(s1)    
  ```

> We will use common set for all the operations which are 
```
setA = {1, 2, 3, 4, 5}
setB = {5, 6, 7, 8, 9}
```
**Union**
In mathematics AUB is which elements are there in both A and B sets

```
setA = {1, 2, 3, 4, 5}
setB = {5, 6, 7, 8, 9}
print(setA | setB)
```
Output :
`{1, 2, 3, 4, 5, 6, 7, 8, 9}`

**Intersection**
In mathematics AnB is which elements are common in both A and B sets

```
setA = {1, 2, 3, 4, 5}
setB = {5, 6, 7, 8, 9}
print(setA & setB)
```
Output :
`{5}`

**Difference**
Set difference is set of elements that are only in setA but not in setB
```
setA = {1, 2, 3, 4, 5}
setB = {5, 6, 7, 8, 9}
print(setA - setB)
```
Output :
`{1, 2, 3, 4}`

**Symmetric Difference**
Symmetric difference : Set of elementa in both setA and setB except those that are common in both sets

```
setA = {1, 2, 3, 4, 5}
setB = {5, 6, 7, 8, 9}
print(setA ^ setB)
```
Output :
`{1, 2, 3, 4, 6, 7, 8, 9}`


<a href='https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset' target='_blank' rel='nofollow'>Python Docs - Set Types Set Frozenset</a>

**TODO: Explain hash/hashable**

**hash**
A hash is an fixed sized integer that identifies a particular value.

Example :
```
print(hash('Hello World!'))
hw = ('Hello World!')
print(hash(hw))
```
Output :
```
-603957490819180268
-603957490819180268
```
Hash collisions are when two different values have the same hash.

```
print(hash('Hello World!'))
hw = ('Hello World!!')
print(hash(hw))
```
Output :
```
-603957490819180268
1293885703463906378
```
