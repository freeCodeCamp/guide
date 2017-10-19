---
title: While Loop Statements
---
## While Loop Statements

Programmers use while loops to execute a block of code repeatedely while a condition is true.

#### Basic usage

Suppose you have a list and you want to remove the last element until the list shrinks to 5 elements:

```python
my_list = list(range(10))

def shrink(list_to_shrink):
  while len(list_to_shrink) > 5:      # the while runs while the list has more than 5 elements
    list_to_shrink.pop()  # this is the block of code inside the while loop
    
shrink(my_list)
```

In the code example above you passed a list with 10 elements to the shrinking function. When code execution reaches the while statement for the first time, the list length is 10. 10 is greater than 5, so the condition is true and the code block will execute. The code block removes the last element of the list, changing its length to 9. After the code block executes, the while statement tests the condition again. The code block will keep executing until the condition becomes false. That happens after you remove 5 elements from the list.

#### Infinite loops

Now suppose you need to write a function that echoes everything you type.

```python
def echo():
  while True:
    print(input())
```

You have just met an infinite loop! The condition you gave to the while statement is *True*, which happens to never be false! As a consequence, the code block will execute forever (actually, until you kill your process or raise a *KeyboardInterrupt* if running Python iteratively).

#### Break statements

You now want to improve the last example to include a magical word that will stop your echo loop.

```python
def echo_with_stop():
  while True:
    text = input()
    if text == 'quit':
      print('done with echoing, bye!')
      break    # stop the while loop!
    print(text)
```

This improved function still uses an infinite loop, but it is possible to break the when you type **quit**. The *break* statement causes the loop to quit immediately, not executing the statements below.

#### Continue statements

You want to improve your function further, now introducing a specific word that will not be echoed.

```python
def echo_with_stop_improved():
  while True:
    text = input()
    if text == 'echo':
      continue  # skip remaining statements in the block
    if text == 'quit':
      print('done with echoing, bye!')
      break   
    print(text)
```
 
 The *continue* statement immediately skips the execution of all statements below and jumps back to the condition testing. So, when you type **echo**, it will no be printed and the code will wait for your next word.
