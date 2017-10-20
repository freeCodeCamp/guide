---
title: While Loop Statements
---
## While Loop Statements

#### Syntax
In Python, a `while` loop has three parts:

1. The keyword `while`
2. an expression that evaluates as `true` or `false`
3. a block of code to execute

```
while expression:
  //block of code
```

As long as the *expression* evaluates as `true`, the loop will continue to execute the block of code.

#### Example
```
num = 1
while (num <= 5):
  print num
  num += 1
```

This loop will cause the values 1, 2, 3, 4, and 5 to be printed to the console.


#### Caution: Infinite Loops
Note that a `while` loop will continue to execute as long as the expression is `true`, which can easily cause an **infinite loop** and crash your program. If the expression never evaluates as false, the loop will continue forever, as in the example below:

```
//don't do this!
x = 10
while (x !== 1):
  print x
  x -= 2
```
In this example, `x` is being decremented by 2 every time the loop executes. This means that `x` will never have an odd value and the condition `x !== 1` will always be true and the loop will continue to decrement `x` into negative values!

#### While vs. for
There are many situations where you might use a `while` loop to accomplish the same task as a `for` loop. A `while` loop might be a better fit in situations where you can't predict the number of iterations that the loop might require.
