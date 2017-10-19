---
title: While Loop Statements
---
## While Loop Statements

A while loop statement in Python programming language repeatedly executes a target statement as long as a given condition is true.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
#### Syntax
```python
while expression:
   statement(s)
 ```
Here, statement(s) may be a single statement or a block of statements. The condition may be any expression, and true is any non-zero value. The loop iterates while the condition is true.
When the condition becomes false, program control passes to the line immediately following the loop.

#### Flow Diagram
![flow diagram](https://www.tutorialspoint.com/python/images/python_while_loop.jpg)

Here, key point of the while loop is that the loop might not ever run. When the condition is tested and the result is false, the loop body will be skipped and the first statement after the while loop will be executed.

#### Example
```python
# Program to add natural
# numbers upto 
# sum = 1+2+3+...+n

n = 10
# initialize sum and counter
sum = 0
i = 1

while i <= n:
    sum = sum + i
    i = i+1    # update counter

# print the sum
print("The sum is", sum)
```
When you run the program, the output will be:
```
Enter n: 10
The sum is 55
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
More information about while loop statement can be found [here](https://docs.python.org/3/reference/compound_stmts.html?highlight=while#the-while-statement)

