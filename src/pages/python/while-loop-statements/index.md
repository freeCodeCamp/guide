---
title: While Loop Statements
---
## While Loop Statements


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

While loops are statements that allow you to repeat a block of code for as long as a condition is true. 

The generale structure of a while loop is made up of a starting line and an indented block of code. 

The starting line open with the "while" keyword, followed by a statement that can be interpreted as true or false and ends with a colon. 

The indented code block will run until the condition in the opening statement is false. Note there is a risk of inadvertently creating an infinite loop if the statement in the opening statement is never false.

Below is a very basic example of a while loop:

```python
i = 0
while i < 10:
  print i
  i += 1
  
print "While loop is done!"
```

In this sample, an index i is created and set to 0. Since i is less than 10, the indented code block will run. In each pass, the indented block will first print the value of i and then increment it by 1. When i = 10, the while condition is no longer met and the following line of code will run and print "While loop is done!".

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[Python documentation about while loops](https://docs.python.org/2/reference/compound_stmts.html#while)



