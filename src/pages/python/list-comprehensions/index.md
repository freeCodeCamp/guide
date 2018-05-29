---
title: List Comprehensions
---

In Python, a list comprehension is a brief but comprehensive way to create a list of items from an iterator. The syntax for a list comprehension is brackets with an expression inside followed by a for statement over some iterator. 

>>> num_list = [1, 2, 3, 4, 5]
>>> list_comp1 = [x ** 2 for x in num_list]
[1, 4, 9, 16, 25]
