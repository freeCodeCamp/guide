---
title: The Python Data Structures
---
A data structure is a particular way of organizing data in a computer so that it can be used efficiently. Python comes with a robust set of inbuilt data structures. Some of the most commonly used ones are :-  
* Lists  
* Tuples  
* Dictionaries  

Majorly, the data structures can be divided into two categories :-  
* Mutable :- A mutable data structure is a structure whose state can  be modified after it is created. Python Lists and Dictionaries are mutable.  
* Immutable :- An immutable data structure can't be modified. Example :- Once a tuple is created, we can't update the values inside it.  

## Reference:

<a href='https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str' target='_blank' rel='nofollow'>Text Sequence Type _str_</a>

Python provides basic five types of data structures:
* LIST - *MUTABLE,HETEROGENEOUS,ORDERED*
```python
>>> my_list=[1,2,False,"Hi"]
>>> print(my_list)
[1, 2, False, 'Hi']
>>> one=["Wassup"]
>>> print(my_list+one)
[1, 2, False, 'Hi', 'Wassup']
>>> my_list.extend(one)
>>> print(my_list)
[1, 2, False, 'Hi', 'Wassup']
>>> print(my_list*3)
[1, 2, False, 'Hi', 'Wassup', 1, 2, False, 'Hi', 'Wassup', 1, 2, False, 'Hi', 'Wassup']
>>> print(my_list[3])
Hi
>>> print(2 in my_list)
True
>>> print(my_list[0:3])
[1, 2, False]
>>> print(len(my_list))
5
>>> my_list.append(5)
>>> print(my_list)
[1, 2, False, 'Hi', 'Wassup', 5]
>>> my_list.insert(1,"USA")
>>> print(my_list)
[1, 'USA', 2, False, 'Hi', 'Wassup', 5]
>>> print(my_list.pop())
5
>>> print(my_list.pop(2))
2
>>> my_list.reverse()
>>> print(my_list)
['Wassup', 'Hi', False, 'USA', 1]
>>> del my_list[1]
>>> print(my_list)
['Wassup', False, 'USA', 1]
>>> print(my_list.index(1))
3
>>> print(my_list.count("USA"))
1
>>> my_list.remove(1)
>>> print(my_list)
['Wassup', False, 'USA']
>>> print(range(10))
range(0, 10)
>>> print(list(range(10)))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> print(list(range(2,5)))
[2, 3, 4]
>>> print(len(list(range(2,10,3))))
3
>>> print((54).__floor__())
54
>>> print((54.35).__gt__(60.51))
False
```
* STRING- *IMMUTABLE, HOMOGENEOUS, ORDERED*
```python
>>> my_string="Hello. I am 23 years old. "
>>> print(my_string[0])
H
>>> print(my_string+"How old are you?")
Hello. I am 23 years old. How old are you?
>>> print(my_string*3)
Hello. I am 23 years old. Hello. I am 23 years old. Hello. I am 23 years old. 
>>> print("Hello" in my_string)
True
>>> print(len(my_string))
26
>>> print(my_string[0:3])
Hel
>>> print(my_string.upper())
HELLO. I AM 23 YEARS OLD. 
>>> print(my_string.lower())
hello. i am 23 years old. 
>>> print("("+my_string.center(30)+")")
(  Hello. I am 23 years old.   )
>>> print(len("("+my_string.center(30)+")"))
32
>>> print(my_string.count("o"))
2
>>> print(my_string.ljust(30))
Hello. I am 23 years old.     
>>> print(my_string.rjust(30))
    Hello. I am 23 years old. 
>>> print(my_string.find("o"))
4
>>> print(my_string.split("23"))
['Hello. I am ', ' years old. ']
>>> print(my_string.strip())
Hello. I am 23 years old.
>>> print(my_string.isalpha())
False
>>> print(my_string.islower())
False
>>> print(my_string.isdigit())
False
>>> print(my_string.isspace())
False
>>> print(my_string.isupper())
False
>>> print(my_string.isalnum())
False
>>> print(my_string.startswith("Hell"))
True
>>> print(my_string.endswith(""))
True
>>> print(my_string.find("am"))
9
>>> print(my_string.find("USA"))
-1
>>> print(my_string.replace("am","amm"))
Hello. I amm 23 years old. 
>>> my_list=["1","two","1"]
>>> print(my_string.join(my_list))
1Hello. I am 23 years old. twoHello. I am 23 years old. 1
>>> st="uuuu"
>>> print(my_string.join(st))
uHello. I am 23 years old. uHello. I am 23 years old. uHello. I am 23 years old. u
```

* TUPLE- *IMMUTABLE,HETEROGENEOUS,ORDERED*
```python
>>> my_tuple=(1,"two",False)
>>> print(my_tuple)
(1, 'two', False)
>>> tu=("whatever",5)
>>> st="whatever"
>>> print(my_tuple+tu)
(1, 'two', False, 'whatever', 5)
>>> print(my_tuple*5)
(1, 'two', False, 1, 'two', False, 1, 'two', False, 1, 'two', False, 1, 'two', False)
>>> print("three" in my_tuple)
False
>>> print(len(my_tuple))
3
>>> print(my_tuple[0:2])
(1, 'two')
```

* SETS-*IMMUTABLE, HETEROGENEOUS, UNORDERED*

```python
>>> my_set={3,6,"cat",4.5,False,1,-1}
>>> se={1,False}
>>> print(my_set)
{False, 1, 3, 4.5, 6, 'cat', -1}
>>> print(1 in my_set)
True
>>> print(len(my_set))
7
>>> print(my_set|se)
{False, 1, 3, 4.5, 6, 'cat', -1}
>>> print(my_set|se)
{False, 1, 3, 4.5, 6, 'cat', -1}
>>> print(my_set.union(se))
{False, 1, 3, 4.5, 6, 'cat', -1}
>>> print(my_set& se)
{False, 1}
>>> print(my_set.intersection(se))
{False, 1}
>>> print(my_set-se)
{3, 4.5, 6, 'cat', -1}
>>> print(my_set.difference(se))
{3, 4.5, 6, 'cat', -1}
>>> print(my_set!=se)
True
>>> print(my_set==se)
False
>>> print(my_set<=se)
False
>>> print(my_set>=se)
True
>>> print(se.issubset(my_set))
True
>>> my_set.add("]")
>>> print(my_set)
{False, 1, 3, 4.5, 6, ']', 'cat', -1}
>>> my_set.remove("]")
>>> print(my_set)
{False, 1, 3, 4.5, 6, 'cat', -1}
>>> print(my_set.pop())
False
>>> print(list(my_set))
[1, 3, 4.5, 6, 'cat', -1]
>>> le=list(my_set)
>>> le[5]=False
>>> print(le)
[1, 3, 4.5, 6, 'cat', False]
>>> print(my_set)
{1, 3, 4.5, 6, 'cat', -1}
>>> print(my_set.clear())
```
* DICTIONARY- *MUTABLE,HETEROGENEOUS,UNORDERED*
```python
>>> my_dict={'1':'Rutgers','2':'University','3':'USA',4:False}
>>> print(my_dict)
{'1': 'Rutgers', '2': 'University', '3': 'USA', 4: False}
>>> print(my_dict['2'])
University
>>> my_dict[5]="Hi"
>>> print(my_dict)
{'1': 'Rutgers', '2': 'University', '3': 'USA', 4: False, 5: 'Hi'}
>>> print('4' in my_dict)
False
>>> print(len(my_dict))
5
>>> del my_dict['3']
>>> print(my_dict)
{'1': 'Rutgers', '2': 'University', 4: False, 5: 'Hi'}
>>> print(my_dict.keys())
dict_keys(['1', '2', 4, 5])
>>> print(my_dict.values())
dict_values(['Rutgers', 'University', False, 'Hi'])
>>> print(my_dict.items())
dict_items([('1', 'Rutgers'), ('2', 'University'), (4, False), (5, 'Hi')])
>>> print(my_dict.get('1'))
Rutgers
>>> print(my_dict.get('3'))
None
>>> print(my_dict.get('3',1))
1
>>> print(list(my_dict))
['1', '2', 4, 5]
```

[Python Data Structures](https://docs.python.org/3.7/tutorial/datastructures.html)
