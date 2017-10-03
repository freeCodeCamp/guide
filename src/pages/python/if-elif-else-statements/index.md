---
title: If Elif Else Statements
---
## If Elif Else Statements

**If**, **Elif** and **Else** statements are **conditional** statements. They execute block of code only if certain condition or conditions are **true**.

Conditional statements provide a path to your program. You can guide your program to do certain things if some exact conditions are met.

Python provides three types of conditional statements-  
1: `if`  
2: `elif`  
3: `else`  

*(Note: The if, elif and else statements are all in lowercase.)*

## if  
The `if` statement simply says, "if something (condition) is true, do this (execute the code in the if block)".  
Syntax -  
```
if your expression:
    execute the code in this indented
    block if the expression evaluates to True
```
Example - 
Statement - "If 100 is greater than 10 say Hello"
```python
if 100 > 10:
    print("Hello")
```
Output - Hello  
The above program will print Hello, only if the condition in `if` statement is `True`.

You can use multiple `if`s to guide your program  
Example - 
```python
if 100 > 10:
    print("Hello")
if 100 < 10:
    print("Hi")
if 100 == 10:
    print("Hey")
```

Using multiple `if`s as shown above is not the best way to guide your program. Keep reading below for better alternatives.

## else  
The `else` statement simply executes the block of code if the condition in `if` does not evaluates to `True`.  
Syntax -  
```
if your expression:
    execute the code in this indented
    block if the expression evaluates to True
else:
    execute the code in this indented
    block if the expression in the if statement
    evaluates to False
```
Example -  
Statement - "If 100 is less than 10 say Hello, else say Hi"
```python
if 100 < 10:
    print("Hello")
else:
    print("Hi")
```
Output - Hi  
The above program will print Hello, only if the condition in `if` statement is true. But since the condition in the `if` statement is `False` the code in the `else` block will be executed.

*(Note: `else` statement is always used in relation with `if` statement except in <a target="_blank" href="http://python-notes.curiousefficiency.org/en/latest/python_concepts/break_else.html">this</a> other case, which is out of scope of this article.)*

You should use only **one** `else` statement in relation to `if` statement. So the following code is **NOT** valid -
```python
# This is an invalid code.
if 100 < 10:
    print("Hello")
else:
    print("Hi")
else:
    print("Hey")
```

## elif  
Remember the *multiple* `if` statement program from above, which I said is not the best way to perform multiple condition checks and guide your program. The `elif` statement comes to rescue, you can use multiple `elif` statements as follows-  
Syntax -  
```
if your expression:
    execute the code in this indented
    block if the expression evaluates to True
elif your another expression:
    execute the code in this indented
    block if the expression in the if statement evaluates to False
    and the expression in the elif statement evaluates to True
else:
    execute the code in this indented
    block if the expression in the if statement and the elif statement
    both evaluates to False
```
Example-
```python
if 100 > 10:
    print("Hello")
elif 100 < 10:
    print("Hi")
elif 100 == 10:
    print("Hey")
```
Did you see how I rewrote the *multiple* `if` statement program from above to use `elif`. The same program can be rewrote again using `elif` and `else`-  
Example-
```python
if 100 > 10:
    print("Hello")
elif 100 < 10:
    print("Hi")
else:
    print("Hey")
```
This is the best way to perform multiple condition checks and execute particular code accordingly.  
Compare the above two codes with the multiple `if` statement code we wrote at the beginning and try to notice the difference.  
You can use multiple `elif` statements unlike the `else` statement which can be used only once.


## Nested If Elif Else Statements
You can nest `if` `elif` and `else` statements into each other.  
Example -  
```python
if 100 > 10:
    if 100 - 100 == 0:
   	 print("Zero")
    else:
    	print("Not Zero")
elif 100 < 10:
    print("Less than 10")
    if 100 / 100 == 0:
        print("Divided to Zero")
else:
    print("Nothing happened")
```
Output - Zero  
As shown above you can nest conditional statements inside each other according to your need.



## Note:  
* Note that every conditional expression in `if` `elif` and `else` ends with a colon as folows-
```python
if a > b:
    pass
```
* You can use boolean operators to chain conditions as follows-
```python
if a > b and a < c:
    pass
elif a > b or a < c:
    pass
else:
    pass
```
This way when both the left `and` right conditions are `True` the code will be executed.
* Python considers non-zero values as `True`, `None` and `0` as `False`.
* Unlike other languages Python does not have switch conditional statement, but you can mimic the functionality using `if` `elif` and `else` conditional statements.
* Python executes your program from top to bottom (remember this), so as soon as Python encounters a conditonal expression which evaluates to True, it will execute the corresponding code in the indented block and will skip other following conditional expressions.
Example - 
```python
if 100 > 10:
    print("Hello")
elif 100 == 100:
    print("Hi")
else:
    print("Hey")
```
Output - Hello  
In this program even though the condition in `elif` statement is `True` the expression in `if` statement which is also `True` is encountered first by Python (remember the top to bottom part) and hence it is executed and other conditional statements are skipped.
