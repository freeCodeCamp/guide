---
title: Python Set Types
---
A set object is an unordered collection of distinct hashable objects. Common uses include membership testing, removing duplicates from a sequence, and computing mathematical operations such as intersection, union, difference, and symmetric difference.

<a href='https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset' target='_blank' rel='nofollow'>Python Docs - Set Types Set Frozenset</a>

**TODO: Explain hash/hashable**
A hash is an fixed sized integer that identifies a particular value.

Example :
```Python
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

```Python
print(hash('Hello World!'))
hw = ('Hello World!!')
print(hash(hw))
```
Output :
```
-603957490819180268
1293885703463906378
```
