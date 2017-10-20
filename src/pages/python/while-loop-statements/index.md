---
title: While Loop Statements
---
## While Loop Statements

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Python utilizes while loops to repeat a given action as many times as possible until a certain condition is fulfilled. Thus, unlike for loops that run a predefined number of times, while loops will keep running as long as the conditional statement is true.

While loops can lead to infinite loops if their condition is never fulfilled.

The basic syntax is:
```python
while True:
  # run code in this block
```
There are many options when creating the conditional statement. A very frequent one is to use [comparisons](https://guide.freecodecamp.org/python/comparisons/):
```python
# We first ask the user to input the password
password = raw_input("Please enter the password to proceed:")
# While the password is wrong, we keep asking the user to input the password
while password.strip() != 'foo':
    password = raw_input("Please enter the password to proceed:")
```
The Boolean-type value True can, itself, be used to create a conditional statement. The break keyword then needs to be used to end the while loop. Thus, we can also write the previous example as:
```python
while True:
    password = raw_input("Please enter the password to proceed:")
    if password.strip() == 'foo':
        break
```
[Boolean operations](https://guide.freecodecamp.org/python/boolean-operations/) can be used to compose more complex conditionals, e.g.:
```python
password = raw_input("Please enter the password to proceed:")
# If we are willing to accept two passwords as valid:
while password.strip() != 'foo' and password.strip() != 'bar':
    password = raw_input("Please enter the password to proceed:")
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [For loops](https://guide.freecodecamp.org/python/for-loop-statements)
- [Boolean operations](https://guide.freecodecamp.org/python/boolean-operations/)
- [Comparisons](https://guide.freecodecamp.org/python/comparisons/)
- [Truth value testing](https://guide.freecodecamp.org/python/truth-value-testing)
 


