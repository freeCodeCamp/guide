---
title: Sleep How Can I Make a Time Delay in Python
---
## Sleep How Can I Make a Time Delay in Python

You might be looking to pause your python program execution, while it executes something else.
The `time` module of Python provides a `sleep()` function which pauses your python program for the provided argument.

#### Example Usage

```py
import time
print("Hi")
time.sleep(5)
print("there")
```
Here **there** is printed after **Hi** after a delay of 5 seconds.
Also float values can be given as arguments to achieve a more precise pause.Similarly float values less than 1 can be used to delay the program execution by certain milliseconds.
Like ```time.sleep(0.300)``` delays the program execution by 300 milliseconds.


#### More Information:
Read more about `sleep()` [here](https://docs.python.org/3/library/time.html#time.sleep)


