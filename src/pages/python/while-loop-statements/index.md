---
title: While Loop Statements
---
## While Loop Statements

Python utilizes a while loop repeat an iteration while a certain condition is True.

While Loop semantic has next structure:
    - `while` statement
    - an expression which evalutes to boolean
    - method body

In other words the basic syntax is:

```python
>>> i = 3
>>> while i > 0:
...     print('Hello, this is iteration #{0}'.format(i))
...     i = i - 1 # please pay attention to this line, it is important to stop while loop
...
Hello, this is iteration #3
Hello, this is iteration #2
Hello, this is iteration #1
```

It is easy to get into infinitive loop if expression always evaluates to `True`

```python
>>> while True:
...     print('Hello')
...
Hello
Hello
Hello
...

Hello
```

Everything that evalutes to boolean can be used as a condiiton in `while` loop. 
Let's use a function for instance.

```python
>>> def always_true():
...     return True
...
>>> while always_true():
...     print('Hello')
Hello
Hello
Hello
```


#### More Information:

- <a href='https://wiki.python.org/moin/WhileLoop' target='_blank' rel='nofollow'>Python While loops documentation</a>