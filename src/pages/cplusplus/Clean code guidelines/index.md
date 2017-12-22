# Clean Code Guidelines

When coding, the coding style you follow can be really important. Specially when you are working with a team or you plan on sharing your 
code.
Most of these guidelines are standard and can be applied to most of the programming languages, however, here you have applications and 
snippets with c++ code, so you can familiarize with it easier.
Remember that these are only recommendations for achieving clarity, which can be a personal prefference, so take these pieces of advice 
into account but don't take them to the letter. Sometimes breaking some of these rules can lead to cleaner code.

## Global variables

Global variables can be easy to use, and with little code it might look like a great solution. But, when the code gets larger and larger, 
it becomes harder to know when are they being used.

Instead of using global variables you could use variables declared in functions which can help you telling what values are being passed 
and identifying errors faster.

```cpp
#include <iostream>
using namespace std;

// Global variables are declared outside functions
int cucumber; // global variable "cucumber"
```

## Using goto, continue, etc.

This is an usual discussion among programmers, just like global variables, these types of statements are usually considered bad practice.
They are considered bad because they lead to ["spaguetti code"](https://en.wikipedia.org/wiki/Spaghetti_code). When we program we want a
linear flow, when using those statements the flow is modified and lead to a "twisted and tangled" flow.

Goto was used in the past when while, for, if functions, however, witht the introduction of those structured programming was created.
In general avoid using goto unless you are sure it will make your code cleaner and easier to read. An example might be using it in nested
loops.

The usage of break and continue are practically the same. Use them in switches and try to make functions with an only purpose so you only 
have one exit point.

![img](https://imgs.xkcd.com/comics/goto.png)
